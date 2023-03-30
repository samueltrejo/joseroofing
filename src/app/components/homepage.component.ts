import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <!-- Hero section -->
    <section class="hero py-5 position-relative" style="background-image: url('assets/roofing_3.jpg')">
    <div class="overlay"></div> <!-- Dark overlay -->  
    <div class="container hero-text-container h-100">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-md-8">
            <h1 class="text-center mb-4">Roofing Gutters Rentals</h1>
            <p class="lead text-center mb-5">We are a highly-experienced roofing contractor
              located in Middle Tennessee, offering a range of services such as complete storm
              restoration, roof replacements & repairs, and tailored custom work to meet your specific roofing needs.</p>
            <div class="d-flex justify-content-center">
              <a class="btn btn-primary btn-lg" href="#" role="button">Free Estimates</a>
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
  `,
  styles: [
    `/* Call to action button styles */
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
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    
    .hero-text-container {
      position: relative;
      z-index: 1;
    }`
  ]
})
export class HomepageComponent {

}
