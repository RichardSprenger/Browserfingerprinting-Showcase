import { Component, OnInit } from '@angular/core';
import { BrowserID, VisitoridService } from 'src/app/services/visitorid.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['browserId'];
  dataSource = new MatTableDataSource();

  adSubscription: Subscription;

  constructor(private visitor: VisitoridService, private router: Router) {
    this.adSubscription = interval(1000).subscribe(x => {
      this.getIds();
    })
  }

  ngOnInit(): void {
    this.getIds();
  }

  getIds() {
    this.visitor.getAllIds().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigate(row: BrowserID) {
    this.router.navigate(['/user', row.browserId]);
  }

}
