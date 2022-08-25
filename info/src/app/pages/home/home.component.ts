import { Component, OnInit } from '@angular/core';
import { BrowserID, VisitoridService } from 'src/app/services/visitorid.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['browserId'];
  dataSource = new MatTableDataSource();

  constructor(private visitor: VisitoridService, private router: Router) { }

  ngOnInit(): void {
    this.visitor.getAllIds().subscribe(res => {
      this.dataSource.data = res;
      console.log(this.dataSource.data)
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
