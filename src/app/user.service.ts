import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}
		
	login(userData) {
		return this.http.post('http://localhost:3000/login', userData);
	}

	signout() {
		return this.http.get('http://localhost:3000/signout');
	}

	registration(userData) {
		return this.http.post('http://localhost:3000/registration', userData);
	}
}