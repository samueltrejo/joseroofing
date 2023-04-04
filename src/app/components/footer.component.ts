import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="py-5">
    <div class="container">
      <div class="row text-primary">
        <div class="col-md-3">
          <h5 class="text-uppercase mb-4">J&H</h5>
          <p class="small">We are a locally owned and operated roofing company serving Middle Tennessee for over 20 years.</p>
        </div>
        <div class="col-md-3">
          <h5 class="text-uppercase mb-4">Services</h5>
          <ul class="list-unstyled small">
            <li>Roofing</li>
            <li>Gutters</li>
            <li>Trailer Rental</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="text-uppercase mb-4">Hours</h5>
          <ul class="list-unstyled small">
            <li>Monday - Sunday:</li>
            <li>7:00am - 6:00pm CST</li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="text-uppercase mb-4">Contact Us</h5>
          <ul class="list-unstyled small">
            <li><a href="tel:++16158289974" role="button"><i class="bi bi-phone"></i> +1(615)828-9974</a></li>
            <li><a href="mailto:marcocuxum463@gmail.com"><i class="bi bi-envelope"></i> marcocuxum463@gmail.com</a></li>
            <li><a href="http://maps.google.com/?q=4052 Yoest Dr, Nashville, TN 37207" target="_blank"><i class="bi bi-geo-alt"></i>  4052 Yoest Dr, Nashville, TN 37207</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  `,
  styles: [
    `a {
      text-decoration: none;
    }`
  ]
})
export class FooterComponent {

}
