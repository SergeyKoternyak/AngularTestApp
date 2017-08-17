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
	showPreloader = true;

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
		
			this.map.on('click', this.eventHandler.bind(this));
			this.markers.addTo(this.map);

			// this.mapService.loadUserMarkers('22').subscribe(
			// 	(data) => {}
			// );
			this.showPreloader = false;
		})
	}

	eventHandler(e) {
		DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this.markers);
	}

	saveMarkers() {
		
	}

	toggleMarkers(e) {
		e.stopPropagation();
		this.isShow = !this.isShow;
		this.isShow ? this.markers.addTo(this.map) : this.markers.removeFrom(this.map);
	}
}