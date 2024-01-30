import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import sumz from "../../Assets/Projects/sumz.png";
import promptopia from "../../Assets/Projects/promptopia.png";
import tutorial_hub from "../../Assets/Projects/tutorial-hub.png";
import genius from "../../Assets/Projects/genius.png";
import snapgram from "../../Assets/Projects/snapgram.png";
import socialScene from "../../Assets/Projects/socialScene.png";

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
              description="Sumz is a web tool utilizing GPT-4 for instant article summarization. Users input a link, and GPT-4's advanced language processing generates concise and coherent summaries. The intuitive interface ensures a seamless experience, making Sumz an efficient solution for quickly extracting key insights from online articles."
              demoLink="https://sumz-by-nihar.netlify.app/"
              ghLink="https://github.com/NiharGandhi/ai-summarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="Promptopia is a shared platform for AI prompts, enabling users to exchange ideas for creative and problem-solving AI applications. The platform fosters collaboration and innovation within the AI community, serving as a hub for diverse prompt sharing and exploration."
              demoLink="https://promptopia-coral.vercel.app/"
              ghLink="https://github.com/NiharGandhi/Promptopia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutorial_hub}
              isBlog={false}
              title="Tutorial Hub"
              description="Tutorial Hub is your go-to Learning Management System (LMS) platform. It simplifies education by offering an easy-to-use interface for educators to create content and learners to access tutorials. With features like assessments and progress tracking, Tutorial Hub ensures a smooth online learning experience."
              ghLink="https://github.com/NiharGandhi/tutorial-hub"
              demoLink="https://tutorial-hub.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ventura - Face Recognition Attendance"
              description="Ventura is a Face Recognition Attendance Software, simplifying attendance tracking with precision. Using facial recognition technology, it streamlines the process, offering a user-friendly solution for accurate and efficient attendance management."
              ghLink="https://github.com/NiharGandhi/ventura"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genius}
              isBlog={false}
              title="Genius - AI SaaS"
              description="Genius is your go-to AI SaaS platform for quick and accessible tools in text, image, music, and code generation. Simplify complex tasks with user-friendly AI capabilities, all in one place."
              ghLink="https://github.com/NiharGandhi/ai-saas"
              demoLink="https://ai-saas-amber.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapgram}
              isBlog={false}
              title="Snapgram"
              description="Snapgram is a dynamic social media platform that fosters instant connection and vibrant communication. With a sleek and intuitive interface, Snapgram enables users to share moments, engage with content, and connect with friends seamlessly. From photo sharing to real-time updates, Snapgram offers a versatile and user-friendly space for staying connected and expressing creativity in the social media realm."
              ghLink="https://github.com/NiharGandhi/yourgram"
              demoLink="https://yourgram.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialScene}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/NiharGandhi/Virtual-Link"
              demoLink="https://virtual-link.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
