import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGooglesearchconsole,
  SiGoogleads,
  SiTiktok,
} from "react-icons/si";

import {
  BsMeta,
} from "react-icons/bs";
import { FaYoutube, FaCpanel,  } from "react-icons/fa";


function Google() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglesearchconsole />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMeta />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTiktok />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaYoutube />
      </Col>
     
    

    
      
    
    </Row>
  );
}

export default Google;
