import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
	constructor(private http: HttpClient) {}
		
	loadUserMarkers(userId) {
		return this.http.post('http://localhost:8000/api/markers', userId)
	}
}