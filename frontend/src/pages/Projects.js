/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
// import Project1Image from "../assets/images/project1.jpg";
// import Project2Image from "../assets/images/project2.jpg";
// import Project3Image from "../assets/images/project3.jpg";
// import Project4Image from "../assets/images/project4.jpg";

const projects = [
  {
    title: "AI-Powered E-commerce Platform",
    image: null,
    description: `Developed a comprehensive AI-powered e-commerce platform using machine learning algorithms to personalize user experiences and 
                  optimize product recommendations. Deployed on AWS with a robust microservices architecture.`,
  },
  {
    title: "Real-Time Traffic Monitoring System",
    image: null,
    description: `Created a real-time traffic monitoring system using computer vision techniques to analyze and detect traffic patterns from live camera feeds.
                  Implemented edge computing solutions to process data efficiently on-site.`,
  },
  {
    title: "Healthcare AI Chatbot",
    image: null,
    description: `Built an AI chatbot for healthcare services that provides instant responses to patient queries and assists in preliminary diagnosis. 
                  Utilized natural language processing and deployed the solution on cloud platforms.`,
  },
  {
    title: "Autonomous Drone Navigation",
    image: null,
    description: `Developed software for autonomous drone navigation using reinforcement learning and computer vision. 
                  Implemented obstacle detection and avoidance mechanisms to enhance flight safety and efficiency.`,
  },
];

function Projects() {
  return (
    <Row gutter={[16, 16]} style={{ position: "relative", padding: 15, margin: 0 }}>
      <Col span={24}>
        <Row id="projects" style={{ textAlign: "center", marginBottom: 10 }}>
          <Card style={{ width: "100%" }}>
            <h1 style={{ fontSize: 36, marginBottom: 0 }}>Projects</h1>
            <h2 style={{ fontSize: 24, color: "#888", marginTop: 0 }}>A showcase of my work</h2>
            <div style={{ fontSize: 18, margin: "0 auto", color: "#555", paddingLeft: 200, paddingRight: 200 }}>
              <p>
                Here are some of the projects I have worked on, demonstrating my skills in software development, AI, and problem-solving. Each project
                highlights different aspects of my expertise and showcases my ability to bring ideas to life.
              </p>
            </div>
          </Card>
        </Row>
        <Row id="project-list" style={{ marginBottom: 20 }}>
          <Card title="Project Portfolio" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              itemLayout="vertical"
              dataSource={projects}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Space direction="vertical" style={{ width: "100%" }}>
                        {item.image}
                        <strong>{item.title}</strong>
                      </Space>
                    }
                    description={<p style={{ color: "#555", paddingLeft: 200, paddingRight: 200 }}>{item.description}</p>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Projects;
