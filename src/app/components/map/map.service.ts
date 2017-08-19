import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
	constructor(private http: HttpClient) {}
		
	loadUserMarkers(markersData) {
		return this.http.post('http://localhost:3000/markers/get', markersData);
	}

	saveUserMarkers(markersData) {
		return this.http.post('http://localhost:3000/markers/save', markersData);
	}
}