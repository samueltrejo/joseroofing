import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <router-outlet></router-outlet> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://www.whatsapp.com/img/v4/logo-whatsapp.svg" alt="WhatsApp logo" width="40" height="40" class="d-inline-block align-text-top">
          WhatsApp
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Security</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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

    <!-- Hero section -->
    <section class="hero py-3" style="background-image: url('https://source.unsplash.com/random/1920x1080')">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-md-8">
            <h1 class="display-4 text-center mb-4">Stay in touch with your friends and family</h1>
            <p class="lead text-center mb-5">WhatsApp is a fast, simple, and secure messaging and calling app that lets you connect with anyone, anywhere.</p>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary btn-lg" href="#" role="button">Get WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Simple. Secure. Reliable messaging.</h2>
            <p class="lead">With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.</p>
            <p class="lead">*Data charges may apply. Contact your provider for details.</p>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src="https://via.placeholder.com/600x400" alt="Smartphone with WhatsApp chat">
          </div>
        </div>
      </div>
    </section>

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
    `/* Custom styles for the WhatsApp homepage component */

    /* Hero styles */
    .hero {}

    /* Navbar styles */
    .navbar {
      background-color: #1e1e1e !important;
      color: #fff;
    }

    .nav-link {
      color: #fff !important;
    }

    /* Call to action button styles */
    .btn-primary {
      background-color: #ffc107;
      border-color: #ffc107;
    }

    .btn-primary:hover {
      background-color: #ffca2b;
      border-color: #ffca2b;
    }

    /* Header text styles */
    h1, h2 {
      color: #ffc107;
    }

    /* Lead text styles */
    .lead {
      color: #fff;
    }

    /* Footer styles */
    footer {
      background-color: #333;
      color: #fff;
    }

    /* Footer link styles */
    ul.list-unstyled > li > a {
      color: #ffc107;
    }

    ul.list-unstyled > li > a:hover {
      color: #ffca2b;
    }`
  ]
})
export class AppComponent {
  title = 'roofing';
}
