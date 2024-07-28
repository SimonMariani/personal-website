/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
import { MailOutlined, LinkedinOutlined, PhoneOutlined } from "@ant-design/icons";
import Simon from "../assets/images/simon32.jpg";
import LogoStacticcs from "../assets/images/logo_stactics.png";
import LogoVinotion from "../assets/images/logo_vinotion.png";
import LogoBlackbear from "../assets/images/logo_blackbear.png";
import LogoBomberbot from "../assets/images/logo_bomberbot.png";
import LogoUVA from "../assets/images/logo_uva.png";
import LogoUU from "../assets/images/logo_uu.png";
import LogoTsinghua from "../assets/images/logo_tsinghua.png";

const workExperience = [
  {
    title: "Stactics - Data/AI Engineer",
    logo: <img src={LogoStacticcs} alt="Stactics" style={{ height: 40 }} />,
    dates: "Jul 2023 - Present",
    description: `At Stactics, I worked as a consultant and product developer. I 
      developed and refined many skills as I built large frontend and backend 
      applications. Alongside building complex web-applications, I also led 
      the deployment onto cloud platforms using Docker, Kubernetes, and 
      GitHub actions. This included projects focused on data analysis and AI, 
      where I used real-life data to implement AI solutions in the cloud or 
      embedded. In these projects, I engaged with clients and managed 
      stakeholders. 
    `,
  },
  {
    title: "ViNotion - Research Intern",
    logo: <img src={LogoVinotion} alt="Vinotion" style={{ height: 40 }} />,
    dates: "Nov 2021 – Jul 2022",
    description: `I did my master’s thesis at ViNotion, which focusses on computer vision 
      in an edge computing fashion. Here, I worked with real life data from 
      cameras mounted on trucks and took a deep dive into segmentation 
      networks and Out-of-Distribution Detection. I am proud to say that my 
      research was published and I look back upon my time here fondly. 
    `,
  },
  {
    title: "Blackbear - Consultant",
    logo: <img src={LogoBlackbear} alt="Blackbear" style={{ height: 30 }} />,
    dates: "Jan 2022 – Dec 2022",
    description: `Blackbear provides a platform where companies can meet freelancing 
      individuals. Here, I did market research of which the result became the 
      foundation of their new products.
    `,
  },
  {
    title: "Vinea - Programming Camp Coordinator",
    logo: <img src={LogoBomberbot} alt="Bomberbot" style={{ height: 100 }} />,
    dates: "Jun 2019 – Aug 2020",
    description: `I coordinated several programming camps for children between the 
      ages of 9 and 13, where I managed and taught software skills. 
    `,
  },
];

const education = [
  {
    title: (
      <Space direction="vertical">
        <img src={LogoUVA} alt="UvA" style={{ height: 60 }} /> <div>University of Amsterdam - MSc Artificial Intelligence</div>
      </Space>
    ),
    dates: "Sep 2020 – Jul 2022",
    description: `The MSc Artificial Intelligence at the University of Amsterdam is one of 
      the best in its field, and I am proud to say that after two years I 
      managed to complete the master’s degree with distinction and publish 
      my master’s thesis. The study program is very technical and covers a 
      wide range of fields within AI in depth. This required a high proficiency in 
      python and math as well as a high degree of adaptability and 
      persistence.  
    `,
  },
  {
    title: (
      <Space direction="vertical">
        <img src={LogoTsinghua} alt="Tsinghua" style={{ height: 60 }} /> <div>Tsinghua University - Exchange</div>
      </Space>
    ),
    dates: "Aug 2019 - Feb 2020",
    description: `
      Tsinghua University is one of the highest-ranking universities globally, 
      and the highest ranking university in China. During my exchange here, I 
      grew as a software engineer and my adaptability to new environments 
      and techniques was profoundly tested. It also provided me with a 
      unique global perspective on technology and education, as well as 
      many insights into their extensive culture. 
    `,
  },
  {
    title: (
      <Space direction="vertical">
        <img src={LogoUU} alt="UU" style={{ height: 60 }} /> <div>Utrecht University - BSc Artificial Intelligence</div>
      </Space>
    ),
    dates: "Sep 2017 - Jul 2020",
    description: `
      This bachelor’s degree at the University of Utrecht is one of the most 
      interdisciplinary AI bachelors available. Besides math, computer 
      science, algorithmics and so forth, this bachelor’s degree also teaches 
      courses related to neuroscience and philosophy. It provided me with 
      many technical skills as well as unique insights to succeed in an ever
      changing world.
    `,
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
    <Row gutter={[16, 16]} style={{ position: "relative", padding: 15, margin: 0 }}>
      <Col span={24}>
        <Row id="general" style={{ textAlign: "center", marginBottom: 10 }}>
          <Card style={{ width: "100%" }}>
            <h1 style={{ fontSize: 36, marginBottom: 0 }}>Simon Mariani</h1>
            <h2 style={{ fontSize: 24, color: "#888", marginTop: 0 }}>Software/AI Engineer</h2>
            <img src={Simon} alt="Simon Mariani" style={{ width: 500, height: 500, borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }} />

            <div style={{ fontSize: 18, margin: "0 auto", color: "#555", paddingLeft: 200, paddingRight: 200 }}>
              <p>
                Versatile software and AI engineer, with strong research skills. Quick learner, adaptable and thrives in new environments. I enjoy creating and
                working on complex projects and bringing them from development into production. This also pairs well with my eagerness to grow as a software
                developer as there is always something new to learn. My academic background helps me to implement complex algorithms and systems, as well as
                developing and training various AI models.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </Card>
        </Row>
        <Row id="contact-information" style={{ marginBottom: 20 }}>
          <Card title="Contact Information" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%", fontSize: 15 }}>
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
        </Row>

        <Row id="work-experience" style={{ marginBottom: 20 }}>
          <Card title="Work Experience" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            {/* Alternative approach */}
            {/* {workExperience.map((item, index) => {
              return (
                <Row style={{ textAlign: index % 2 === 0 ? "left" : "right" }}>
                  <Col span={4}>{index % 2 === 0 ? item.logo : null}</Col>
                  <Col span={16}>
                    <p>{<strong>{item.title}</strong>}</p>
                    <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                    <p style={{ color: "#555" }}>{item.description}</p>
                  </Col>
                  <Col span={4}>{index % 2 === 0 ? null : item.logo}</Col>
                  <Divider />
                </Row>
              );
            })} */}
            <List
              itemLayout="horizontal"
              dataSource={workExperience}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    // avatar={item.logo}
                    title={
                      <Space direction="vertical">
                        {item.logo} <strong>{item.title}</strong>
                      </Space>
                    }
                    description={
                      <>
                        <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                        <p style={{ color: "#555", paddingLeft: 200, paddingRight: 200 }}>{item.description}</p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="education" style={{ marginBottom: 20 }}>
          <Card title="Education" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
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
                        <p style={{ color: "#555", paddingLeft: 200, paddingRight: 200 }}>{item.description}</p>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="programming-languages" style={{ marginBottom: 20 }}>
          <Card title="Programming Languages" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              dataSource={skills}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="frameworks-and-software" style={{ marginBottom: 20 }}>
          <Card title="Frameworks and Software" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              dataSource={frameworks}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="development-tools" style={{ marginBottom: 20 }}>
          <Card title="Development Tools" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              dataSource={tools}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="ai-experience" style={{ marginBottom: 20 }}>
          <Card title="AI Experience" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              dataSource={aiExperience}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </Row>
        <Row id="publications" style={{ marginBottom: 20 }}>
          <Card title="Publications and Research" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
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
        </Row>
        <Row id="languages" style={{ marginBottom: 20 }}>
          <Card title="Languages" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              dataSource={languages}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.name} description={item.level} />
                </List.Item>
              )}
            />
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Home;
