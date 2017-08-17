import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}
		
	login(userData) {
		return this.http.post('http://localhost:3000/user/login', userData)
	}

	registration(userData) {
		return this.http.post('http://localhost:3000/user/registration', userData)
	}
}