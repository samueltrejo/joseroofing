import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="assets/roofing_6.jpg" alt="WhatsApp logo" width="40" height="40" class="d-inline-block align-text-top">
          <!-- J&H Roofing & Construction -->
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reliability">Reliability</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#trusted">Trusted</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="tel:++16158289974" role="button"><i class="bi bi-phone"></i> +1(615)828-9974</a></li>
                <li><a class="dropdown-item" href="mailto:marcocuxum463@gmail.com"><i class="bi bi-envelope"></i> marcocuxum463@gmail.com</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `/* Navbar styles */
    .navbar {
      background-color: #1e1e1e !important;
      color: #fff;
    }

    .navbar-brand {
      color: #ffc107 !important;
    }

    .nav-link {
      color: #fff !important;
    }
    
    .nav-link:hover {
      color: #ffc107 !important;
    }`
  ]
})
export class NavbarComponent {

}
