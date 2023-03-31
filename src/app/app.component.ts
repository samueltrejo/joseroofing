import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-homepage></app-homepage>
    <!-- <app-homeservices></app-homeservices> -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'roofing';
}
