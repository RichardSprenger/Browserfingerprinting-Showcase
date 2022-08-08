import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class VisitoridService {

  visitorId: string = "";

  constructor(private http: HttpClient) { }

  checkId(id: string) {
    return this.http.get(API_URl + '/id/' + id);
  }

  getVisitorId() {
    return this.visitorId;
  }

  setVisitorId(visitorId: string) {
    this.visitorId = visitorId;
    this.checkId(visitorId).subscribe(() => {});
  }

  updateHistory(url: String) {
    return this.http.post(API_URl + '/history', {url: url, browserId: this.visitorId});
  }

  getAd() {
    return this.http.get(API_URl + '/ad' + this.visitorId);
  }

}
