import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const API_URl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class VisitoridService {

  visitorId: string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((val) => {
      this.updateHistory(val).subscribe(() => {});
    });
  }

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

  updateHistory(event: any) {
    return this.http.put(API_URl + '/history', {url: event.url, browserId: this.visitorId});
  }

  getAd() {
    return this.http.get(API_URl + '/ad' + this.visitorId);
  }

}
