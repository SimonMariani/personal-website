/** @format */

import React from "react";
import { Row, Col, Card, List, Layout } from "antd";
import { MailOutlined, LinkedinOutlined, PhoneOutlined } from "@ant-design/icons";
import Simon from "../assets/images/simon57.jpg";

const { Content } = Layout;

const workExperience = [
  {
    title: "Stactics - Data/AI Engineer",
    dates: "Jul 2023 - Present",
    description: "At Stactics, I worked as a consultant and product developer...",
  },
  {
    title: "ViNotion - Research Intern",
    dates: "Nov 2021 – Jul 2022",
    description: "I did my master’s thesis at ViNotion, which focuses on computer vision...",
  },
  {
    title: "Blackbear - Consultant",
    dates: "Jan 2022 – Dec 2022",
    description: "Blackbear provides a platform where companies can meet freelancing individuals...",
  },
  {
    title: "Vinea - Programming Camp Coordinator",
    dates: "Jun 2019 – Aug 2020",
    description: "I coordinated several programming camps for children between the ages of 9 and 13...",
  },
];

const education = [
  {
    title: "University of Amsterdam - MSc Artificial Intelligence",
    dates: "Sep 2020 – Jul 2022",
    description: "The MSc Artificial Intelligence at the University of Amsterdam is one of the best in its field...",
  },
  {
    title: "Tsinghua University - Exchange",
    dates: "Aug 2019 - Feb 2020",
    description: "Tsinghua University is one of the highest-ranking universities globally...",
  },
  {
    title: "Utrecht University - BSc Artificial Intelligence",
    dates: "Sep 2017 - Jul 2020",
    description: "This bachelor’s degree at the University of Utrecht is one of the most interdisciplinary AI bachelors...",
  },
];

const skills = ["Python", "JavaScript", "HTML/CSS", "C#", "R", "C - C++", "Clingo – Prolog - Netlogo"];

const frameworks = ["Django", "Flask", "FastAPI", "NodeJS", "ExpressJS", "ReactJS", "SQL", "NoSQL", "PyTorch", "CUDA", "Linux", "Unity", "PowerBI"];

const tools = ["Docker", "Docker Compose", "Docker Swarm", "Kubernetes", "Git", "GitHub", "GitHub Actions", "Azure", "AWS", "ETL/ELT"];

const languages = [
  { name: "Dutch", level: "fluent" },
  { name: "English", level: "fluent" },
  { name: "Spanish", level: "intermediate" },
  { name: "German", level: "intermediate" },
  { name: "Chinese", level: "elementary" },
];

const aiExperience = [
  "Deep Learning",
  "Distributed Machine Learning",
  "Generative Computer Vision",
  "Image Segmentation",
  "Generative Natural Language Processing",
  "Reinforcement Learning",
  "Active Learning",
  "OOD-detection",
  "Anomaly Detection",
  "Time Series Analysis",
  "Recommender systems",
  "Game Theory",
];

const publications = [
  { title: "Master’s Thesis AI (UvA)", link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=oL4oNKIB6d8=&t=1" },
  { title: "Reproducibility Study (UvA)", link: "https://openreview.net/forum?id=sacRaG5zt_m" },
  { title: "Bachelor’s Thesis (UU)", link: "https://studenttheses.uu.nl/handle/20.500.12932/37006" },
];

const contactInfo = {
  email: "simon.mariani65@gmail.com",
  linkedin: "https://linkedin.com/in/simon-mariani65",
  phone: "+31 6 375 552 91",
};

function Home() {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "36px" }}>Simon Mariani</h1>
          <h2 style={{ fontSize: "24px", color: "#888" }}>Software/AI Engineer</h2>
          <img src={Simon} alt="Simon Mariani" style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }} />
          <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
            Versatile software and AI engineer, with strong research skills. Quick learner, adaptable and thrives in new environments...
          </p>
        </Col>
        <Col span={24}>
          <Card title="Contact Information" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <p>
              <MailOutlined /> {contactInfo.email}
            </p>
            <p>
              <LinkedinOutlined />{" "}
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                {contactInfo.linkedin}
              </a>
            </p>
            <p>
              <PhoneOutlined /> {contactInfo.phone}
            </p>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Work Experience" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              itemLayout="horizontal"
              dataSource={workExperience}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<strong>{item.title}</strong>}
                    description={
                      <>
                        <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                        <p style={{ color: "#555" }}>{item.description}</p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Education" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              itemLayout="horizontal"
              dataSource={education}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<strong>{item.title}</strong>}
                    description={
                      <>
                        <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                        <p style={{ color: "#555" }}>{item.description}</p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Skills" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={skills}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Frameworks and Software" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={frameworks}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Development Tools" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={tools}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Languages" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={languages}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.name} description={item.level} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="AI Experience" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={aiExperience}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Publications and Research" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <List
              dataSource={publications}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Content>
  );
}

export default Home;
