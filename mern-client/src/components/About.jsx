import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-image">
          <img src="https://picsum.photos/200/300" alt="Bookstore" />
        </div>
        <div className="hero-content">
          <h1>About Our Bookstore</h1>
          <p>
            Welcome to our beloved bookstore, a haven for bookworms and casual readers alike. We're passionate about fostering a love for reading and providing a welcoming space where you can escape into the world of literature.
          </p>
        </div>
      </section>

      <section className="about-us">
        <h2>Our Story</h2>
        <p>
          Our bookstore was founded in [year: 2023] by [Om Tripathi], a lifelong booklover with a dream of sharing their passion with others. We started with a small collection of books in a cozy corner of [town], and quickly became a cherished part of the community.
        </p>
        <p>
          Over the years, we've grown into a thriving bookstore with a vast selection of books, from classic novels to contemporary bestsellers, as well as children's books, non-fiction, and everything in between. We also host regular author events, book clubs, and storytime sessions for children.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to be the premier bookstore in [town], providing an exceptional experience for our customers and fostering a love for reading in our community.
        </p>
        <ul>
          <li>To provide a wide and diverse selection of books to meet the needs of all readers.</li>
          <li>To create a welcoming and inviting atmosphere where customers can browse and discover new books.</li>
          <li>To offer knowledgeable and friendly customer service to help customers find the perfect book.</li>
          <li>To host events and programs that promote reading and literacy.</li>
          <li>To be an active member of the community and support local authors and businesses.</li>
        </ul>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We're always happy to hear from our customers. Please feel free to contact us if you have any questions, comments, or suggestions.
        </p>
        <div className="contact-info">
          <p>
            <strong>Address:</strong>
            [REC SONBHADRA]
          </p>
          <p>
            <strong>Phone:</strong>
            [08081091612]
          </p>
          <p>
            <strong>Email:</strong>
            [abc@gmail.com]
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
