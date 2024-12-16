import React from 'react';

const About = () => {

  return (
    <div className="about-wrapper">
      <section className="about-header">
        <h1>About Us</h1>
       
        <p>We are passionate about what we do, and we strive to provide the best service for our clients.</p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img src="/images/about.png" alt="About Us" />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Our company is dedicated to providing top-notch services to help businesses and individuals thrive in the modern
            world. With years of experience and a team of highly skilled professionals, we have built a reputation for delivering
            innovative solutions and exceptional customer service.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses and individuals by providing them with the tools and knowledge they need to
            succeed. We believe in fostering long-term relationships with our clients by ensuring they achieve their goals.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced and professional team</li>
            <li>Tailored solutions to meet your needs</li>
            <li>Commitment to innovation and excellence</li>
            <li>Customer-centric approach</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
