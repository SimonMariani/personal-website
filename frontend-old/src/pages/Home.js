/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
import { MailOutlined, LinkedinOutlined, PhoneOutlined, CloudOutlined } from "@ant-design/icons";
import Simon from "../assets/images/simon32.jpg";
import LogoStacticcs from "../assets/images/logo_stactics.png";
import LogoVinotion from "../assets/images/logo_vinotion.png";
import LogoBlackbear from "../assets/images/logo_blackbear.png";
import LogoBomberbot from "../assets/images/logo_bomberbot.png";
import LogoUVA from "../assets/images/logo_uva.png";
import LogoUU from "../assets/images/logo_uu.png";
import LogoTsinghua from "../assets/images/logo_tsinghua.png";
import CustomList from "../components/CustomList";

// Workexperience, education and contact information
const workExperience = [
  {
    title: "Stactics - Data/AI Engineer",
    logo: <img src={LogoStacticcs} alt="Stactics" style={{ height: 30 }} />,
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
    logo: <img src={LogoBlackbear} alt="Blackbear" style={{ height: 25 }} />,
    dates: "Jan 2022 – Dec 2022",
    description: `Blackbear provides a platform where companies can meet freelancing 
      individuals. Here, I did market research of which the result became the 
      foundation of their new products.
    `,
  },
  {
    title: "Vinea - Programming Camp Coordinator",
    logo: <img src={LogoBomberbot} alt="Bomberbot" style={{ height: 80 }} />,
    dates: "Jun 2019 – Aug 2020",
    description: `I coordinated several programming camps for children between the 
      ages of 9 and 13, where I managed and taught software skills. 
    `,
  },
];

const education = [
  {
    title: "University of Amsterdam - MSc Artificial Intelligence",
    logo: <img src={LogoUVA} alt="UvA" style={{ height: 40 }} />,
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
    title: "Tsinghua University - Exchange",
    logo: <img src={LogoTsinghua} alt="Tsinghua" style={{ height: 40 }} />,
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
    title: "Utrecht University - BSc Artificial Intelligence",
    logo: <img src={LogoUU} alt="UU" style={{ height: 40 }} />,
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

const contactInfo = {
  email: "simon.mariani65@gmail.com",
  linkedin: "https://linkedin.com/in/simon-mariani65",
  phone: "+31 6 375 552 91",
  website: "https://simonmariani.com",
};

// Remainder
const languages = [
  { name: "Dutch", description: "Fluent" },
  { name: "English", description: "Fluent" },
  { name: "Spanish", description: "Intermediate" },
  { name: "German", description: "Intermediate" },
  { name: "Chinese", description: "Elementary" },
];

const publications = [
  { title: "Master’s Thesis AI (UvA)", link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=oL4oNKIB6d8=&t=1" },
  { title: "Reproducibility Study (UvA)", link: "https://openreview.net/forum?id=sacRaG5zt_m" },
  { title: "Bachelor’s Thesis (UU)", link: "https://studenttheses.uu.nl/handle/20.500.12932/37006" },
];

function Home({ useSmall }) {
  const textPadding = useSmall ? 0 : "10vw";

  return (
    <Row gutter={[16, 16]} style={{ position: "relative", padding: 15, margin: 0 }}>
      <Col span={24}>
        <Row id="general" style={{ textAlign: "center", marginBottom: 10 }}>
          <Card style={{ width: "100%" }}>
            <h1 style={{ fontSize: 36, marginBottom: 0 }}>Simon Mariani</h1>
            <h2 style={{ fontSize: 24, color: "#888", marginTop: 0 }}>Software/AI Engineer</h2>
            <img
              src={Simon}
              alt="Simon Mariani"
              style={{ width: useSmall ? "65vw" : 500, height: useSmall ? "65vw" : 500, borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }}
            />

            <div style={{ fontSize: 18, margin: "0 auto", color: "#555", paddingLeft: textPadding, paddingRight: textPadding }}>
              <p>
                Versatile software and AI engineer, with strong research skills. Quick learner, adaptable and thrives in new environments. I enjoy creating and
                working on complex projects and bringing them from development into production. This also pairs well with my eagerness to grow as a software
                developer as there is always something new to learn. My academic background helps me to implement complex algorithms and systems, as well as
                developing and training various AI models.
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
            <p>
              <CloudOutlined />{" "}
              <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                {contactInfo.website}
              </a>
            </p>
          </Card>
        </Row>

        <Row id="work-experience" style={{ marginBottom: 20 }}>
          <Card title="Work Experience" style={{ borderRadius: "10px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
            <List
              itemLayout="horizontal"
              dataSource={workExperience}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Space direction="vertical">
                        {item.logo} <strong>{item.title}</strong>
                      </Space>
                    }
                    description={
                      <>
                        <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                        <p style={{ color: "#555", paddingLeft: textPadding, paddingRight: textPadding }}>{item.description}</p>
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
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <Space direction="vertical">
                        {item.logo} <strong>{item.title}</strong>
                      </Space>
                    }
                    description={
                      <>
                        <p style={{ marginBottom: "5px" }}>{item.dates}</p>
                        <p style={{ color: "#555", paddingLeft: textPadding, paddingRight: textPadding }}>{item.description}</p>
                      </>
                    }
                  />
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
            <CustomList list={languages} />
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Home;
