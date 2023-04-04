import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <!-- Hero Call to Action -->
    <section id="home" class="hero py-5 position-relative" style="background-image: url('assets/roofing_3.jpg')">
    <div class="overlay"></div> <!-- Dark overlay -->  
    <div class="container hero-text-container h-100">
        <div class="row h-100 align-items-center justify-content-center">
        <div class="hero-content col-md-8 text-center">
          <h1 class="display-3 mb-0">J&H Roofing</h1>
          <h1 class="display-3 mb-4">& Construction</h1>
          <!-- <app-textrotate></app-textrotate> -->
          <p class="lead text-uppercase mb-5" style="color: #fff;">Quality solutions for your home or business</p>
          <p class="lead mt-5 mb-4" style="color: #fff;">At J&H, we provide top-quality roofing services, including repairs and
            installations. We also specialize in gutter installations and repairs, and offer trailer rentals to help you transport
            materials or equipment for your roofing projects. Trust J&H to ensure your roof is in excellent condition. Call, text or email for a free estimate.</p>
          <div class="btn-group mb-4">
            <a href="tel:+16155857127" class="btn btn-primary">Free Estimate</a>
            <a href="tel:+16158289974" class="btn btn-primary">Estimado Gratis</a>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- At [Roofing Company Name], we provide top-quality roofing services, including repairs, installations, and gutter maintenance. We also offer trailer rentals to help you transport materials or equipment for your roofing projects. Trust us for all your roofing needs. -->

    <!-- About Us -->
    <section id="about-us" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="fw-bold mb-4">Middle Tennessee Roofing Experts</h2>
            <p class="lead mb-4">At our roofing company, we pride ourselves on providing exceptional service to our customers. Our services include:</p>
            <ul class="list-unstyled lead mb-5">
              <li><i class="bi bi-check"></i> Roof repairs, installations, and replacements</li>
              <li><i class="bi bi-check"></i> Gutter replacement, repair, and maintenance</li>
              <li><i class="bi bi-check"></i> Trailer rentals for all your needs</li>
            </ul>
            <p class="lead fw-bold mb-4">20+ Years of Experience</p>
            <p class="lead mb-4">We are a locally owned and operated roofing company with over 20 years of experience. Our team has the knowledge and expertise to handle any roofing project, big or small.</p>
            <p class="lead fw-bold mb-4">Serving Middle Tennessee</p>
            <p class="lead mb-4">We are proud to serve the Middle Tennessee area, including Nashville, Clarksville, and the surrounding communities. Our commitment is to leave our customers satisfied with our work.</p>
          </div>
          <div class="col-md-6">
            <div id="roofing-slideshow" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div *ngFor="let i of nums" class="carousel-item{{i == 0 ? ' active' : ''}}">
                  <img src="../../assets/roofing_{{i}}.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equiptor Benefits -->
    <section id="reliability" class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <h2 class="fw-bold mb-4">Efficient, Safe, and Clean Roofing Services</h2>
          <div class="col-md-6 order-md-2">
            <div class="row mb-4">
              <div class="col">
                <h3 class="fw-bold">Efficiency</h3>
                <p>Our equipment speeds up the roofing process, which means we can get the job done faster without compromising quality.</p>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <h3 class="fw-bold">Safety</h3>
                <p>Our process designed to safely and efficiently move debris from your roof to the truck without putting anyone or your property at risk.</p>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col">
                <h3 class="fw-bold">Cleanliness</h3>
                <p>Our trailer's catch-all system prevents debris from falling onto your lawn or garden, leaving the job site cleaner and more organized, so you don't have to worry about cleaning up after we're gone.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="ratio ratio-16x9">
              <iframe src="https://www.youtube-nocookie.com/embed/RuobWQ-Hu8Y?rel=0&amp;controls=0&amp;showinfo=0" title="Equiptor 4000 in action" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Services -->
    <section id="services" class="py-5">
      <h2 class="fw-bold mb-5 text-center">Our Services</h2>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 lead">
            <i class="bi bi-tools fs-1 mb-3 text-primary"></i>
            <h3 class="h4 mb-2">Roofing Services</h3>
            <p>We offer a variety of roofing services including repairs, installations, and storm damage repairs. Our team of experienced professionals use high-quality materials and the latest technology to ensure that your roof is built to last.</p>
          </div>
          <div class="col-md-4 lead">
            <i class="bi bi-layout-text-window-reverse fs-1 mb-3 text-primary"></i>
            <h3 class="h4 mb-2">Gutter Services</h3>
            <p>We also offer gutter replacement, repair, and maintenance services. Our team will ensure that your gutters are functioning properly to protect your home from water damage. We use top-quality materials to ensure that your gutters last for years to come.</p>
          </div>
          <div class="col-md-4 lead">
            <i class="bi bi-truck fs-1 mb-3 text-primary"></i>
            <h3 class="h4 mb-2">Trailer Rentals</h3>
            <p>In addition to roofing and gutter services, we also offer trailer rentals for all your transportation needs. Our trailers are well-maintained and available in a variety of sizes, so you can find the perfect fit for your needs. Contact us today to learn more!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted -->
    <section id="trusted" class="py-5 bg-light">
      <div class="container">
        <h2 class="fw-bold mb-5 text-center">Why Choose Us</h2>
        <div class="row justify-content-center">
          <div class="col-md-3 text-center">
            <div class="mb-4">
              <i class="bi bi-clock fs-1 text-primary"></i>
            </div>
            <h4 class="fs-5 mb-3">Years of Experience</h4>
            <p class="mb-0">We have over 20 years of experience providing quality roofing services to Middle Tennessee. You can trust our expertise and knowledge.</p>
          </div>
          <div class="col-md-3 text-center">
            <div class="mb-4">
              <i class="bi bi-award fs-1 text-primary"></i>
            </div>
            <h4 class="fs-5 mb-3">Licensed & Insured</h4>
            <p class="mb-0">We are licensed and insured, so you can have peace of mind knowing that your property and our team are protected.</p>
          </div>
          <div class="col-md-3 text-center">
            <div class="mb-4">
              <i class="bi bi-shield-check fs-1 text-primary"></i>
            </div>
            <h4 class="fs-5 mb-3">Warranty</h4>
            <p class="mb-0">We stand behind the quality of our work and offer a warranty on all of our roofing services. You can trust that we'll get the job done right.</p>
          </div>
          <div class="col-md-3 text-center">
            <div class="mb-4">
              <i class="bi bi-binoculars fs-1 text-primary"></i>
            </div>
            <h4 class="fs-5 mb-3">Free Inspections & Estimates</h4>
            <p class="mb-0">We offer free inspections and estimates for all of our roofing services. We'll assess your needs and provide a detailed estimate at no cost to you.</p>
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

    .lead {
      padding: 0;
      list-style-type: none;
    }
    
    /* Hero styles */
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
    }
    
    .hero-content {
      backdrop-filter: blur(10px);
      border-radius: 15px;
      box-shadow: 0 0px 5px rgba(0,0,0,0.2);
    }
    
    .carousel-item {
      max-height: 477px;
    }`
  ]
})
export class HomepageComponent {
  nums = Array.from(Array(15).keys())
}
