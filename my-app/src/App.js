import React from "react";
import "./index.css";
import ScrollToTop from "react-scroll-to-top";
import sideImg from "./images/big.png";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faBullseye, faCogs, faGraduationCap,faCircleCheck,faLightbulb,faUser,faAward } from '@fortawesome/free-solid-svg-icons';
import logos from "./images/logos.png";



function App() {
  return (
    <>
      <header class="home-header header-with-bg">
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent header-nav">
            <div className="container-fluid">
              <a className="navbar-brand" href="">
                <img src={logo} alt="Logo" />
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#AboutUs">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#OurServices">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#WhyUs">
                    Why Us?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="header-image">

          <div class="text-overlay">
            <h1><span className="Animate">E</span>xpert Staffing and Technology <br></br>
              Consulting Solutions</h1>
          </div>
          <hr class="header-line"></hr>
          <div class="header-text">
            <a href="#AboutUs"><button class="button-64" role="button"><span class="text">Learn More</span></button></a>
          </div>
        </div>
      </header>

      <div id="AboutUs" className="second_page">
        <h3>About Us</h3>
        <hr className="underline"></hr>
        <p style={{ fontSize: 25, color: "grey", paddingLeft: "8rem", paddingTop: "3rem", maxWidth: "50%", display: "inline-block", lineHeight: 1.5 }}>
          Tech Motion is a leading recruiting firm that provides top-notch technical talent to the industry. With a reputation as a provider of IT Services for recruiting and staffing industry experts, we are dedicated to connecting the best tech jobs with the most talented professionals.
        </p>
        <img src={sideImg} alt="placeholder" style={{ float: "right", paddingRight: "1rem" }} />
      </div>

      <div id="OurServices" className="third_page">
        <h1 style={{ textAlign: "center", paddingTop: "4rem", fontSize:"2.5rem" , color:"#98d4ff"}}>What We Do</h1>
        <h2 style={{ textAlign: "center" , fontSize:"1.5rem", fontWeight:"lighter", paddingTop:"1rem"}}>Services We Offer</h2>
        <hr className="Lines"></hr>
        <div className="placeholder-wrapper">
          <div className="placeholder firstThirdH">

            <FontAwesomeIcon icon={faBriefcase} className="fa-solid fa-camera fa-3x" />
            <h3>IT Staffing</h3>
            <p>TechMotion has extensive capabilities in the IT staffing and consulting landscape.</p>
          </div>
          <div className="placeholder">

            <FontAwesomeIcon icon={faCheckCircle} className="fa-solid fa-camera fa-3x" />
            <h3>Automated Testing</h3>
            <p>Automated and Manual testing services to ensure great user experience for any product.</p>
          </div>
          <div className="placeholder">

            <FontAwesomeIcon icon={faCheckCircle} className="fa-solid fa-camera fa-3x" />
            <h3>Manual Testing</h3>
            <p>Automated and Manual testing services to ensure great user experience for any product.</p>
          </div>
          <div className="placeholder">

            <FontAwesomeIcon icon={faBullseye} className="fa-solid fa-camera fa-3x" />
            <h3>Opportunities</h3>
            <p>Find & capture career opportunities in the IT industry to frame a successful career.</p>
          </div>
          <div className="placeholder">

            <FontAwesomeIcon icon={faCogs} className="fa-solid fa-camera fa-3x" />
            <h3>Consulting</h3>
            <p>TechMotion has extensive capabilities in the IT staffing and consulting landscape.</p>
          </div>
          <div className="placeholder">

            <FontAwesomeIcon icon={faGraduationCap} className="fa-solid fa-camera fa-3x" />
            <h3>Training</h3>
            <p>Upskill yourself with latest IT courses and stay ahead in the competition.</p>
          </div>
        </div>
      </div>


      <div className="fourth_page">
        <h3 className="how_we_do_it">How We Do It</h3>
        <div className="line"></div>
        <div className="holders">
          <div className="holder firstH">
            <i className="fas fa-laptop"></i>
            <h4 className="holder-header">IT Staffing & Consulting</h4>
            <p className="holder-paragraph">TechMotion has extensive capabilities in the IT staffing and consulting landscape.</p>
          </div>
          <div className="holder secondH">
            <i className="fas fa-cogs"></i>
            <h4 className="holder-header">Automated and Manual Testing Services</h4>
            <p className="holder-paragraph">Automated and Manual testing services to ensure great user experience for any product.</p>
          </div>
          <div className="holder thirdH">
            <i className="fas fa-handshake"></i>
            <h4 className="holder-header">Career Opportunities</h4>
            <p className="holder-paragraph">Find & capture career opportunities in the IT industry to frame a successful career.</p>
          </div>
          <div className="holder fourthH">
            <i className="fas fa-laptop-code"></i>
            <h4 className="holder-header">Software Development</h4>
            <p className="holder-paragraph">Delivering robust and reliable software solutions that drive innovation and growth.</p>
          </div>
        </div>
      </div>


      <div id = "WhyUs" class="fifth_page">
        <h3 class="why_us">Why Us</h3>
        <hr></hr>
        <p class="why_us_paragraph">We aim to deliver high-quality, tailored IT solutions that meet the unique needs of our clients. Our experienced team is committed to providing exceptional service and building strong relationships.</p>
        <div class="holders5">
          <div class="holder5">
            <FontAwesomeIcon icon={faCircleCheck} id="#icon" className="fa-solid fa-icons fa-3x" />
            <h4 class="holder-header5">Reliability</h4>
          </div>
          <div class="holder5">
          <FontAwesomeIcon icon={faLightbulb}  className="fa-solid fa-icons fa-3x "/>
            <h4 class="holder-header5">Innovation</h4>
          </div>
          <div class="holder5">
          <FontAwesomeIcon icon={faUser} className="fa-solid fa-icons fa-3x"/>
            <h4 class="holder-header5">Collaboration</h4>
          </div>
          <div class="holder5">
          <FontAwesomeIcon icon={faAward} className="fa-solid fa-icons fa-3x" />
            <h4 class="holder-header5">Excellence</h4>
          </div>
        </div>
      </div>


      <div className="sixth_page">
        <h3>Our Clients</h3>
        <hr></hr>
        <h4 className="our_clients_text">Serving over 1000 satisfied clients</h4>
        <img src={logos}></img>
      </div>








      <footer id="footer" className="App-footer">
        <img src={logo} alt="Logo" className="ft-logo" />
        <div className="App-footer-row">

          <div className="App-footer-col1">
            <h2>Our Services</h2>
            <ul>
              <li>IT Staffing and Consulting</li>
              <li>Testing & QA</li>
              <li>Career Placement</li>
              <li>IT Staffing</li>
            </ul>
          </div>
          <div className="App-footer-col2">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="">Services</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="App-footer-col3">
            <h2>Contact Us</h2>
            <ul>
              <li>1234 Giant Street
                Dallas, TX 76040</li>
              <li>(555)-123-456</li>
              <li>dallas@techmotion.com</li>
            </ul>
          </div>
        </div>
        <ScrollToTop></ScrollToTop>
      </footer>

    </>
  );
}

export default App;
