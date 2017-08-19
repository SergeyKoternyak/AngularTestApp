import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service'
import { Router } from '@angular/router';

declare let DG: any;


@Component({
		selector: 'map',
		templateUrl: 'map.component.html',
		styleUrls: ['map.component.less'],
		providers: [MapService]
})
export class MapComponent implements OnInit {
	constructor(private mapService: MapService, private router: Router) {}

	userLoginNow = localStorage.userLogin;
	markersArr: any;
	isShowMarkers = true;
	DGmarkerGroup = DG.featureGroup();
	map: any;
	
	saveButton = 'Save markers';
	showButton = 'Show markers';

	ngOnInit() {
		if (!this.userLoginNow) {
			this.router.navigate(['./login']);
		} else {
			this.mapService.loadUserMarkers({ userId: this.userLoginNow }).subscribe((data: any) => {
					this.markersArr = data;
	
					DG.then(() => {
						this.map = DG.map('map', {
							center: [46.48, 30.74],
							zoom: 11,
							fullscreenControl: false,
							doubleClickZoom: false
						});
					
						this.markersArr.forEach(item => {
							DG.marker(item).addTo(this.DGmarkerGroup);
						});
						
						this.DGmarkerGroup.addTo(this.map);
						
						this.map.on('click', this.addMarker.bind(this));
					})
				}
			);
		}
	}

	addMarker(e) {
		const coordinates = [e.latlng.lat, e.latlng.lng];

		DG.marker(coordinates).addTo(this.DGmarkerGroup);
		this.markersArr.push(coordinates);
	}

	saveMarkers(e) {
		e.stopPropagation();
		
		this.mapService.saveUserMarkers({
			markersUserId: localStorage.userLogin,
			markers: this.markersArr
		}).subscribe((data: any) => {
			console.log(data)
		});
	}

	toggleMarkers(e) {
		e.stopPropagation();
		this.isShowMarkers = !this.isShowMarkers;
		this.isShowMarkers ? this.DGmarkerGroup.addTo(this.map) : this.DGmarkerGroup.removeFrom(this.map);
	}
}