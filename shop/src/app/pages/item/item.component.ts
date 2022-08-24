import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Item, ItemService } from 'src/app/services/item.service';
import { VisitoridService } from 'src/app/services/visitorid.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: Item;

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute, private visitorid: VisitoridService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.itemService.getItemById(params['id']).subscribe(item => {
        if (item !== undefined) this.item = item
      });
    })
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((val) => {
      this.visitorid.updateHistory(val).subscribe(() => {});
    });
  }

}
