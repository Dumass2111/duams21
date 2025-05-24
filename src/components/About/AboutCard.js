import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Dumas </span>
            from <span className="purple"> Hai Duong, Vietnam.</span>
            <br />
            I am currently working as a store manager at Highlands Coffee.
            <br />
            I have completed a bachelor's degree in business administration.
            <br />
            <br />
            Apart from coding and managing, here are some of my core strengths in management that I take pride in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🧠 Strategic thinking and long-term vision planning
            </li>
            <li className="about-activity">
              <ImPointRight /> 🧑‍🤝‍🧑 Building cohesive and disciplined teams
            </li>
            <li className="about-activity">
              <ImPointRight /> 📊 Data-driven decision making and performance tracking
            </li>
            <li className="about-activity">
              <ImPointRight /> 💬 Clear communication and delegation skills
            </li>
            <li className="about-activity">
              <ImPointRight /> ⚙️ Strong operational control with a hands-on leadership style
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎯 Target-oriented execution with high accountability
            </li>
          </ul>

          <p style={{ color: "rgb(17, 142, 245)" }}>
            "𝗟𝗶𝗳𝗲 𝗶𝘀 𝘁𝗵𝗶𝘀 🫴 <br/>
            𝗜 𝘄𝗮𝗻𝘁 𝘁𝗵𝗶𝘀 🤏"{" "}
          </p>
          <footer className="blockquote-footer">inspirational quotes for me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
