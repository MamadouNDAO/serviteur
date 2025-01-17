import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getOtp(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'api/otp', data);
  }
}
