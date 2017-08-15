import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}
		
	login(userData) {
		return this.http.post('/', userData).subscribe(
			(data) => {
				console.log(data);
			}
		);
	}

	registration(userData) {
		return this.http.post('/', userData).subscribe(
			(data) => {
				console.log(data);
			}
		);
	}
}