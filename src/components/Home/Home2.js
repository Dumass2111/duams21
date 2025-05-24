import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillBehanceCircle,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, business administration, designing and I have at least learnt
              something, I think… 🌠
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                   <br />
                - Programming Language (HTML, CSS, PHP, JS and SQL) 
                <br />
                 - Business Administration (Marketing, Finance, Sales,  Branding)
                 <br />
                 - Design (UI/UX, Graphic Design, Adobe, Figma)
                 </b>
              </i>
       
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                E-commerce.
                </b>
                <br />
                <br />
                Anyway, I hope to be <b className="purple">  a District Manager or a General Director.</b>
              </i>
          
              <br />
              Main skills:<br />
                <b className="purple">- High adaptability that helps me easily adjust to changing circumstances to achieve fruitful outcomes. </b> 
                <br />
                <b className="purple">- Team leadership that allows me to motivate members to work with dedication and create a positive working environment.  </b> 
                <br />
                <b className="purple">- Time and work management that enables me to work productively and effectively. </b> 
                <br />
                <b className="purple">- Problem-solving and communication skills to cope with different people and settle conflicts.</b> 

          
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/dumdirector/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
          
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dumas2111/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.behance.net/to41"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
