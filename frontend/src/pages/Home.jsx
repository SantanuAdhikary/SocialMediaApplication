import React from 'react';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Your success is our priority. Explore our services and see how we can help you grow.</p>
          <a href="#services" className="cta-btn">Explore Services</a>
        </div>
        <div className="hero-image">
          <img src="/images/home.png" alt="Hero" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-box">
            <img src="/images/services.png" alt="Service 1" />
            <h3>Consulting</h3>
            <p>We provide expert consulting services to help your business thrive in today's market.</p>
          </div>
          <div className="service-box">
            <img src="/images/ai.png" alt="Service 2" />
            <h3>Development</h3>
            <p>Our development team builds scalable, high-performing applications tailored to your needs.</p>
          </div>
          <div className="service-box">
            <img src="/images/webdev.png" alt="Service 3" />
            <h3>Design</h3>
            <p>We craft beautiful and user-friendly designs that leave a lasting impression on your customers.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The consulting services transformed our business model and led us to success. We highly recommend them!"</p>
            <span>- Client A</span>
          </div>
          <div className="testimonial-card">
            <p>"Their development team was amazing, delivering on time with exceptional quality."</p>
            <span>- Client B</span>
          </div>
          <div className="testimonial-card">
            <p>"Their design work is simply stunning, helping us stand out from the competition."</p>
            <span>- Client C</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today and take your business to the next level.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
