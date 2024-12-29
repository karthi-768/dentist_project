import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "core-js/modules/web.structured-clone";
import scalingImage from "./assets/scaling.jpg";
import rootcanalImage2 from "./assets/fillings.jpg";
import rootcanalImage from "./assets/rootcanal.jpg";
import rootcanalImage3 from "./assets/extractons.avif";
import rootcanalImage4 from "./assets/crown.avif";
import rootcanalImage5 from "./assets/dentures.jpg";
import rootcanalImage6 from "./assets/implant.jpg";
import rootcanalImage7 from "./assets/pediatric.jpg";
import doctor1 from "./assets/doctor1.jpeg";
import doctor2 from "./assets/doctor2.webp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <header className="header">
          <div className="header-content">
            <h1 className="header-title">Welcome to Nalam Dental Clinic</h1>
            <p className="header-subtitle">Your smile, our priority</p>
          </div>
          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img
                  src={scalingImage}
                  alt="Scaling"
                  className="service-image"
                />
                <h3>Scaling</h3>
                <p>
                  Keep your teeth clean and healthy with professional scaling.
                </p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage2}
                  alt="Fillings"
                  className="service-image"
                />
                <h3>Fillings</h3>
                <p>Restore damaged teeth with our durable fillings.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage}
                  alt="Root Canal"
                  className="service-image"
                />
                <h3>Root Canal Treatment</h3>
                <p>Pain-free solutions to save your natural teeth.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage3}
                  alt="Extractions"
                  className="service-image"
                />
                <h3>Extractions</h3>
                <p>Safe and efficient removal of problematic teeth.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage4}
                  alt="Crown and Bridges"
                  className="service-image"
                />
                <h3>Crown and Bridges</h3>
                <p>Restore your smile with custom crowns and bridges.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage5}
                  alt="Dentures"
                  className="service-image"
                />
                <h3>Dentures</h3>
                <p>Comfortable and natural-looking dentures for all ages.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage6}
                  alt="Implants"
                  className="service-image"
                />
                <h3>Implants</h3>
                <p>Permanent and reliable tooth replacement options.</p>
              </div>
              <div className="service-card">
                <img
                  src={rootcanalImage7}
                  alt="Pediatric Treatments"
                  className="service-image"
                />
                <h3>Pediatric Treatments</h3>
                <p>Specialized care for your child’s dental health.</p>
              </div>
            </div>
          </section>

          <section id="about" className="about-section">
            <h2>About Us</h2>
            <p>
              At our clinic, we are committed to providing comprehensive and
              high-quality dental care. Our experienced team ensures every
              patient receives personalized treatment in a comfortable and
              welcoming environment. We utilize the latest technology to deliver
              the best results for all your dental needs.
            </p>
            <section id="doctors" className="doctors-section">
              <h2>Our Experts</h2>
              <div className="doctors-grid">
                <div className="doctor-card">
                  <img
                    src={doctor1}
                    alt="Dr. N Vidhya"
                    className="doctor-image"
                  />
                  <h3>Dr. N.Vidhya</h3>
                  <p>BDS, MDS - Crown & Bridge Specialist,implantologist</p>
                </div>
                <div className="doctor-card">
                  <img
                    src={doctor1}
                    alt="Dr. D Arun"
                    className="doctor-image"
                  />
                  <h3>Dr. D Arun</h3>
                  <p>BDS, MDS - Crown & Bridge Specialist,implantologist</p>
                </div>
              </div>
            </section>
          </section>

          <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <p>
                <strong>Phone:</strong> 9043682912 , 9790862467
              </p>
              <p>
                <strong>Email:</strong> contact@dentalclinic.com
              </p>
              <p>
                <strong>Address:</strong> No 8C, Ground floor, Agarsen College
                Road, Venugopal Nagar, Madhavaram, Chennai, Tamil Nadu 600060
              </p>
            </div>
            {/* <form className="contact-form">
              <h3>Get in Touch</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" >Submit</button>
            </form> */}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
