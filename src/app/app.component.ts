import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h3 {
  //       color: dodgerblue;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'angular-complete-guide';
  display = false;
  displayDetails: Array<Number> = [];
  counter = 0;

  onDisplayDetails() {
    this.display = !this.display;
    this.displayDetails.push(Date.now());
    console.log(this.displayDetails);
  }
}
