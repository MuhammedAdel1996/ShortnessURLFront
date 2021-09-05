import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SERVER_URL } from 'src/environments/environment.prod';
@Injectable({
    providedIn: 'root',
  })
  export class URLService {
    
    constructor(private http: HttpClient, private route: Router) {
    }
 
    public Add(URL: any) {
     
        return this.http.post<any>(SERVER_URL + 'Segment/Insert', URL);
      }

      public GetALL() {
       
        return this.http.get<any>(SERVER_URL + 'Segment/GetAll');
      }
  }