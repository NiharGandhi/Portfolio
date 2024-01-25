import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import sumz from "../../Assets/Projects/sumz.png";
import promptopia from "../../Assets/Projects/promptopia.png";
import tutorial_hub from "../../Assets/Projects/tutorial-hub.png";

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
              imgPath={sumz}
              isBlog={false}
              title="Sumz"
              description="Sums, a webpage that allows you to summarize any article using it's weblink with the power of GPT-4."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://sumz-by-nihar.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="To be Written"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://promptopia-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutorial_hub}
              isBlog={false}
              title="Tutorial Hub"
              description="Got to Write"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://tutorial-hub.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ventura - Face Recognition Attendance"
              description="To be Written"
              ghLink="https://github.com"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NA"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
