import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
class UserService {
    constructor(public http: HttpClient) {
        
    }
    
    login(userData) {
        return this.http.post(userData)
    }
}