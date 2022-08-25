import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class VisitoridService {

  constructor(private http: HttpClient) { }

  getAllIds(): Observable<BrowserID[]> {
    return this.http.get<BrowserID[]>(API_URl + "/id");
  }

  getHistroy(browserId: string): Observable<History[]> {
    return this.http.get<History[]>(API_URl + "/history/" + browserId);
  }
}

export interface BrowserID {
  id: number;
  browserId: string;
}

export interface History {
  id: number;
  browserId: string;
  url: string;
}
