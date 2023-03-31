import { Component } from '@angular/core';

@Component({
  selector: 'app-homeservices',
  template: `
  <section class="py-5">
      <div class="container">
        <h2>Our Services</h2>
        <div class="service-container">
          <div class="service" (click)="toggleRoofing()">
            <h3>Roofing</h3>
            <div *ngIf="showRoofing">
              <p>From repairs to installations, we have you covered with top-quality materials and expert craftsmanship.</p>
            </div>
          </div>
          <div class="service" (click)="toggleGutters()">
            <h3>Gutters</h3>
            <div *ngIf="showGutters">
              <p>Keep your roof and foundation protected with our gutter installations and repairs.</p>
            </div>
          </div>
          <div class="service" (click)="toggleRental()">
            <h3>Rental</h3>
            <div *ngIf="showRental">
              <p>We offer trailer rentals to help you transport materials or equipment for your roofing projects.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  `,
  styles: [
    `
    .service-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .service {
      width: 30%;
      border: 1px solid black;
      padding: 10px;
      margin-bottom: 20px;
    }
    .service h3 {
      margin-top: 0;
    }
  `
  ]
})
export class HomeservicesComponent {
  showRoofing = false;
  showGutters = false;
  showRental = false;

  toggleRoofing() {
    this.showRoofing = !this.showRoofing;
  }

  toggleGutters() {
    this.showGutters = !this.showGutters;
  }

  toggleRental() {
    this.showRental = !this.showRental;
  }
}
