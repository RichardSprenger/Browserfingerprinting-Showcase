import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { History, VisitoridService } from 'src/app/services/visitorid.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string = ""
  displayedColumns: string[] = ['url'];
  dataSource = new MatTableDataSource();

  constructor(private activatedRoute: ActivatedRoute, private visitor: VisitoridService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.visitor.getHistroy(this.id).subscribe(history => {
        this.dataSource.data = history;
      });
    });
  }

}
