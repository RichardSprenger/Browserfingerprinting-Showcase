import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'info';

  password = "";

  onKey(event: any) {
    this.password = event.target.value;
  }
}
