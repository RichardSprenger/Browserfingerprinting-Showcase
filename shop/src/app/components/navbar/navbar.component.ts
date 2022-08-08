import { Component, OnInit } from '@angular/core';
import { FingerprintjsProAngularService } from '@fingerprintjs/fingerprintjs-pro-angular';
import { VisitoridService } from 'src/app/services/visitorid.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private fingerprintjsProAngularService: FingerprintjsProAngularService, private visitorSerivce: VisitoridService) { }


  ngOnInit(): void {
    this.onIdentifyButtonClick();
  }

  async onIdentifyButtonClick() : Promise<void> {
    // Get the visitor identifier when you need it.
    const data = await this.fingerprintjsProAngularService.getVisitorData();
    this.visitorSerivce.setVisitorId(data.visitorId);
  }

}
