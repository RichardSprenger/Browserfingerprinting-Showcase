import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Item, ItemService } from 'src/app/services/item.service';
import { VisitoridService } from 'src/app/services/visitorid.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  item!: Item;

  adSubscription: Subscription;

  constructor(
    private router: Router,
    private visitorId: VisitoridService,
    private itemService: ItemService
  ) {
    this.loadAd();
    this.adSubscription = interval(3000).subscribe(x => {
      this.loadAd();
    })
  }

  ngOnInit(): void {

  }

  loadAd() {
    var item = 1;
    if (this.visitorId.getVisitorId() != "") this.visitorId.getAd().subscribe(ad => {
      item = Number(ad.split("/").pop())
      this.itemService.getItemById(item).subscribe(item => {
        if (item) this.item = item;
      })
    });
  }

  gotoAd() {
    const url = "https://shop.sprenger.pro/item/" + this.item.id
    window.location.href = url;
  }
}
