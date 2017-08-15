import { Component, OnInit } from '@angular/core';
declare let DG: any;


@Component({
		selector: 'map',
		templateUrl: 'map.component.html',
		styleUrls: ['map.component.less']
})
export class MapComponent implements OnInit {
	
	saveButton = 'Save markers';
	showButton = 'Show markers';
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
		})
	}

	eventHandler(e) {
		DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this.markers);
	}

	saveMarkers() {}

	toggleMarkers(e) {
		e.stopPropagation();
		this.isShow = !this.isShow;
		this.isShow ? this.markers.addTo(this.map) : this.markers.removeFrom(this.map);
	}
}