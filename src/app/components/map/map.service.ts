import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
	constructor(private http: HttpClient) {}
		
	loadUserMarkers() {
		return this.http.get('http://localhost:3000/markers');
	}

	saveUserMarkers() {
		// return this.http.post('http://localhost:3000/markers');
	}
}