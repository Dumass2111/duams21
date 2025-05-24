import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WEBSITE LẤY VOUCHER HIGHLANDS"
              description="Owner - Deverloper - 🤩🤩 VOUCHER HIGHLANDS TOÀN QUỐC: GIẢM SẬP SÀN - NGÀN ƯU ĐÃI!!💯
              ✅TRANG WEB LẤY VOUCHER: http://voucherhighlandstoanquoc.com/
              🥤Ở đây bạn sẽ luôn có những ưu đãi hot hit nhất tại Highlands Coffee: Mua 1 Tặng 1, Mua 2 Tặng 1, Giảm 50k, Giảm 40k,..."
              ghLink="https://voucherhighlandstoanquoc.com/"
              demoLink="https://voucherhighlandstoanquoc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Designer Group Get Voucher"
              description="Sáng tạo nội dung, hình ảnh đảm bảo đăng tải đầy đủ, nhanh chóng các Chương trình khuyến mại hấp dẫn đến tay khách hàng Highlands Coffee."
              ghLink="https://voucherhighlandstoanquoc.com/"
              demoLink="https://voucherhighlandstoanquoc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Team Building Project"
              description="Bất kỳ sự thành công nào cũng đều cần đội ngũ giỏi. Luôn hướng đến đào tạo, hướng dẫn đội ngũ của mình phát triển hết khả năng"
              ghLink="https://voucherhighlandstoanquoc.com/"
              demoLink="https://voucherhighlandstoanquoc.com/"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Soccer Gold Medal"
              description="Huy Chương Vàng giải bóng đá nam Highlands Coffee Toàn Quốc 2022, 2023."
              ghLink="https://voucherhighlandstoanquoc.com/"
              demoLink="https://voucherhighlandstoanquoc.com/"        
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Order of 1000 Merchandise items"
              description="Hoàn thành ký kết, giao vận, xử lý đơn đặt hàng 1000 bình giữ nhiệt Highlands Coffee trị giá gần 200.000.000 đồng"
              ghLink="https://voucherhighlandstoanquoc.com/"
              demoLink="https://voucherhighlandstoanquoc.com/"                 // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FACEBOOK GROUP ADMIN"
              description="Admin của 5 group facebook về Voucher, Tuyển dụng việc làm sinh viên, pha chế,..."
              ghLink="https://www.facebook.com/groups/voucherhighlandsdeal"
              demoLink="https://www.facebook.com/groups/voucherhighlandsdeal"          
                />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
