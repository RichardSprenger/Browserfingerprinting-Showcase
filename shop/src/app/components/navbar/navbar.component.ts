import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintjsProAngularService } from '@fingerprintjs/fingerprintjs-pro-angular';
import { VisitoridService } from 'src/app/services/visitorid.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private fingerprintjsProAngularService: FingerprintjsProAngularService,
    private router: Router,
    private visitorIdService: VisitoridService) { }


  ngOnInit(): void {
    this.onIdentifyButtonClick();
  }

  async onIdentifyButtonClick() : Promise<void> {
    // Get the visitor identifier when you need it.
    const data = await this.fingerprintjsProAngularService.getVisitorData();
    this.visitorIdService.setVisitorId(data.visitorId);
  }

  randomItem() {
    this.router.navigate(['/item', Math.floor(Math.random() * 12) + 1]);
  }


}
