/** @format */

import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link as RouterLink } from "react-router-dom"; // , Switch, Link
import { Grid, Row, Col, Layout, Flex, Button, Menu, Divider, FloatButton, Anchor } from "antd";
import { HomeOutlined, ProjectOutlined } from "@ant-design/icons";

import Simon from "./assets/images/simon28.jpg";
// import Logo from "./assets/images/ailogo.avif";
import Logo from "./assets/images/ailogo.jpg";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ChatBox from "./components/ChatBox";

const { Header, Sider, Footer, Content } = Layout;
const { Link } = Anchor;

const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <RouterLink to="/home">Home</RouterLink>,
  },
  {
    key: "projects",
    icon: <ProjectOutlined />,
    label: <RouterLink to="/projects">Projects</RouterLink>,
  },
];

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Sider
            width={300}
            collapsedWidth={100}
            theme="light"
            trigger={null}
            collapsible
            collapsed={false}
            // style={{ zIndex: 2, position: "relative", overflow: "hidden" }}
            style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
          >
            {/* <Flex style={{ alignItems: "center", justifyContent: "center" }}>
              {collapsed ? (
                <img src={Logo} alt="unavailable" style={{ flexGrow: 1, width: "100%" }} />
              ) : (
                <Flex vertical justify="center" align="center" style={{ width: "100%" }}>
                  <img src={Simon} alt="unavailable" style={{ flexGrow: 1, padding: 30, width: 300, height: 300, borderRadius: "50%", objectFit: "cover" }} />
                  <h1>Welcome!</h1>
                </Flex>
              )}
            </Flex> */}
            <img src={Logo} alt="unavailable" style={{ width: 250 }} />
            <Routes>
              <Route
                path="/home"
                element={
                  <Anchor
                    style={{ padding: 20 }}
                    items={[
                      {
                        key: "1",
                        href: "#general",
                        title: "General",
                      },
                      {
                        key: "2",
                        href: "#contact-information",
                        title: "Contact Information",
                      },
                      {
                        key: "3",
                        href: "#work-experience",
                        title: "Work Experience",
                      },
                      {
                        key: "4",
                        href: "#education",
                        title: "Education",
                      },
                      {
                        key: "5",
                        href: "#programming-languages",
                        title: "Programming Languages",
                      },
                      {
                        key: "6",
                        href: "#frameworks-and-software",
                        title: "Frameworks and Software",
                      },
                      {
                        key: "7",
                        href: "#development-tools",
                        title: "Development Tools",
                      },
                      {
                        key: "8",
                        href: "#ai-experience",
                        title: "AI Experience",
                      },
                      {
                        key: "9",
                        href: "#publications",
                        title: "Publications",
                      },
                      {
                        key: "10",
                        href: "#languages",
                        title: "Languages",
                      },
                    ]}
                  />
                }
              ></Route>
              {/* <Route path="/projects" element={<Projects />} /> */}
            </Routes>

            <div style={{ position: "absolute", bottom: 0, left: 0, paddingLeft: 10 }}>
              <h5>{new Date().getFullYear()} &copy; Simon Mariani</h5>
            </div>
          </Sider>

          <Layout style={{ marginLeft: 300 }}>
            {/* <Header style={{ padding: 0, background: "white", display: "flex", alignItems: "center" }}> */}
            <Header
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                background: "white",
              }}
            >
              {/* <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: 25 }} /> : <MenuFoldOutlined style={{ fontSize: 25 }} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            /> */}
              {/* <div className="demo-logo" style={{ width: 300 }} /> */}
              <Menu
                mode="horizontal"
                theme="light"
                items={items}
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              />
              {/* <Row justify="start">
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined style={{ fontSize: 25 }} /> : <MenuFoldOutlined style={{ fontSize: 25 }} />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              </Row> */}
            </Header>
            <Content
              style={{
                overflow: "auto",
                backgroundColor: "rgba(240, 240, 240, 1)",
                // height: "90vh",
              }}
            >
              <ChatBox />
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Content>
            <Footer
              style={{
                textAlign: "start",
                // color: "#fff",
                // backgroundColor: "#4096ff",
                backgroundColor: "white",
              }}
            >
              Footer content
            </Footer>
          </Layout>
          {/* <Layout> */}

          {/* </Layout> */}
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
