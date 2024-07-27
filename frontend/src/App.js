/** @format */

import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"; // , Switch, Link
import { Grid, Row, Col, Layout, Flex, Button, Menu, Divider, FloatButton } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LineChartOutlined,
  ProfileOutlined,
  CloseOutlined,
  CalendarOutlined,
  // CompassOutlined,
  TableOutlined,
  BoxPlotOutlined,
  InfoOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

import Simon from "./assets/images/simon28.jpg";
// import Logo from "./assets/images/ailogo.avif";
import Logo from "./assets/images/ailogo.jpg";
import Home from "./pages/Home";
import WorkExperience from "./pages/WorkExperience";

import ChatBox from "./components/ChatBox";

const { Header, Sider, Footer, Content } = Layout;

const sidebarItems = [
  {
    key: "General",
    label: "General",
    type: "group",
    children: [
      {
        key: "Home",
        icon: <ProfileOutlined />,
        label: (
          <Flex justify="space-between">
            <Link to="/home">Home</Link>
          </Flex>
        ),
      },
      {
        key: "Experience",
        icon: <ProfileOutlined />,
        label: (
          <Flex justify="space-between">
            <Link to="/workexperience">Work Experience</Link>
          </Flex>
        ),
      },
    ],
  },
  {
    key: "Projects",
    label: <Divider style={{ padding: 0, margin: 0 }} />,
    type: "group",
    children: [
      {
        key: "project1",
        icon: <InfoOutlined />,
        label: (
          <Flex justify="space-between">
            <Link to="/project1">Project1</Link>
          </Flex>
        ),
      },
      {
        key: "project2",
        icon: <InfoOutlined />,
        label: (
          <Flex justify="space-between">
            <Link to="/project2">project2</Link>
          </Flex>
        ),
      },
    ],
  },
];

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Sider
            width={400}
            collapsedWidth={100}
            theme="light"
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ zIndex: 2, height: "100vh", position: "relative", overflow: "hidden" }}
          >
            <Flex style={{ alignItems: "center", justifyContent: "center" }}>
              {/* <img src={Logo} alt="unavailable" style={{ flexGrow: 1, width: "100%" }} /> */}
              {collapsed ? (
                <img src={Logo} alt="unavailable" style={{ flexGrow: 1, width: "100%" }} />
              ) : (
                <Flex vertical justify="center" align="center" style={{ width: "100%" }}>
                  <img src={Simon} alt="unavailable" style={{ flexGrow: 1, padding: 30, width: 300, height: 300, borderRadius: "50%", objectFit: "cover" }} />
                  <h1>Welcome!</h1>
                </Flex>
              )}
            </Flex>

            <Menu mode="inline" theme="light" items={sidebarItems} />

            <div style={{ position: "absolute", bottom: 0, left: 0, paddingLeft: 10 }}>
              <h5>{new Date().getFullYear()} &copy; Simon Mariani</h5>
            </div>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: "white" }}>
              <Row justify="start">
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
              </Row>
            </Header>
            <Content
              style={{
                overflow: "auto",
                backgroundColor: "rgba(240, 240, 240, 1)",
                height: "70vh",
              }}
            >
              {/* <FloatButton
                shape="circle"
                type="primary"
                style={{ right: 94, width: 100, height: 100 }}
                icon={<CustomerServiceOutlined style={{ fontSize: 40, position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }} />}
              /> */}

              <ChatBox />

              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/workexperience" element={<WorkExperience />} />
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
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
