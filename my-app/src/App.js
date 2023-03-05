import React from "react";
import "./index.css";
import headerIMG from "./images/img1.jpg";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faBullseye, faCogs, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
      <header class="home-header header-with-bg">
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent header-nav">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" />
              </a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="header-image">

          <div class="text-overlay">
            <h1>Expert staffing and technology <br></br>
              consulting solutions</h1>
            <p>Some additional text here</p>
          </div>
          <hr class="header-line" />
          <div class="header-text">
            <p>Some additional text below the line</p>
          </div>
        </div>
      </header>

      <div className="second_page">
        <h3>About Us</h3>
        <p style={{ color: "black", paddingLeft: "8rem", paddingTop: "1rem", maxWidth: "50%", display: "inline-block" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum,
          ex eu hendrerit dignissim, nisi nunc eleifend mauris, eu dapibus quam est in nulla.
          Maecenas gravida elit vel libero varius, et convallis lectus commodo. Duis id
          pretium velit, in ultrices velit. Fusce consequat mauris sed nunc sagittis
          pellentesque. Donec id mauris lectus. Suspendisse potenti. Donec pellentesque
          imperdiet magna, sed tincidunt tellus luctus nec. Sed sit amet est eleifend,
          volutpat ante eu, tristique quam. Suspendisse eget nibh ac quam tincidunt viverra
          vel vel purus. Aenean id odio ut quam tincidunt sodales a ut odio.
        </p>
        <img src="https://via.placeholder.com/150" alt="placeholder" style={{ float: "right", paddingRight: "15rem" }} />
      </div>

      <div className="third_page">
  <h1 style={{textAlign: "center", paddingTop: "6rem"}}>What We Do</h1>
  <div className="placeholder-wrapper">
    <div className="placeholder">
      
      <FontAwesomeIcon icon={faBriefcase} />
      <h3>IT Staffing</h3>
      <p>TechMotion has extensive capabilities in the IT staffing and consulting landscape.</p>
    </div>
    <div className="placeholder">
      
      <FontAwesomeIcon icon={faCheckCircle} />
      <h3>Automated Testing</h3>
      <p>Automated and Manual testing services to ensure great user experience for any product.</p>
    </div>
    <div className="placeholder">
    
      <FontAwesomeIcon icon={faCheckCircle} />
      <h3>Manual Testing</h3>
      <p>Automated and Manual testing services to ensure great user experience for any product.</p>
    </div>
    <div className="placeholder">
      
      <FontAwesomeIcon icon={faBullseye} />
      <h3>Opportunities</h3>
      <p>Find & capture career opportunities in the IT industry to frame a successful career.</p>
    </div>
    <div className="placeholder">
      
      <FontAwesomeIcon icon={faCogs} />
      <h3>Consulting</h3>
      <p>TechMotion has extensive capabilities in the IT staffing and consulting landscape.</p>
    </div>
    <div className="placeholder">
      
      <FontAwesomeIcon icon={faGraduationCap} />
      <h3>Training</h3>
      <p>Upskill yourself with latest IT courses and stay ahead in the competition.</p>
    </div>
  </div>
</div>



        
      <footer className="App-footer">
        <img src={logo} alt="Logo" className="ft-logo"/>
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
        
        
      </footer>
    </>
  );
}

export default App;
