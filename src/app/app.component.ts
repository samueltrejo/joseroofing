import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-homepage></app-homepage>

    <!-- <div class="container mt-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="fw-bold">Simple. Secure.</h1>
          <h2 class="fw-bold">Reliable messaging.</h2>
          <p class="lead">With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
          <button class="btn btn-primary">Download Now</button>
        </div>
        <div class="col-md-6">
          <img src="https://www.whatsapp.com/img/v4/home-messaging-phone_2x.jpg" alt="WhatsApp messaging screenshot" class="img-fluid">
        </div>
      </div>
    </div> -->

    <footer class="mt-5 py-3 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li class="list-inline-item"><a href="#">Terms of Service</a></li>
              <li class="list-inline-item"><a href="#">Brand Resources</a></li>
            </ul>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0">© 2023 WhatsApp Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = 'roofing';
}
