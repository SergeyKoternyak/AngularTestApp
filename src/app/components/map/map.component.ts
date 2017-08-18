import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service'

declare let DG: any;


@Component({
		selector: 'map',
		templateUrl: 'map.component.html',
		styleUrls: ['map.component.less'],
		providers: [MapService]
})
export class MapComponent implements OnInit {
	constructor(private mapService: MapService) { }
	
	saveButton = 'Save markers';
	showButton = 'Show markers';
	showPreloader = false;

	markers = DG.featureGroup();
	isShow = true;
	map: any;
	
	ngOnInit() {
		DG.then(() => {
			this.map = DG.map('map', {
				center: [46.48, 30.74],
				zoom: 11,
				fullscreenControl: false,
				doubleClickZoom: false
			});
		
			this.map.on('click', this.addMarker.bind(this));
			this.markers.addTo(this.map);

			
			this.showPreloader = false;
		})
	}

	addMarker(e) {
		DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this.markers);
	}

	saveMarkers() {
		console.log('load')
		this.mapService.loadUserMarkers().subscribe(
			(data) => {
				console.log(data)
			}
		);
	}

	toggleMarkers(e) {
		e.stopPropagation();
		this.isShow = !this.isShow;
		this.isShow ? this.markers.addTo(this.map) : this.markers.removeFrom(this.map);
	}
}