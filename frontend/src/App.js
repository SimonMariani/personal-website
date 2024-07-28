/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Link as RouterLink } from "react-router-dom"; // , Switch, Link
import { Layout, Menu, Anchor } from "antd";
import { HomeOutlined, ProjectOutlined } from "@ant-design/icons";
// import Simon from "./assets/images/simon28.jpg";
// import Logo from "./assets/images/ailogo.jpg";
import LogoSimon from "./assets/images/logo_simon.png";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ChatBox from "./components/ChatBox";
const { Header, Sider, Footer, Content } = Layout;

const headerItems = [
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
            style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
          >
            <img src={LogoSimon} alt="unavailable" style={{ width: 250, paddingTop: 20 }} />
            <Routes>
              <Route
                path="/home"
                element={
                  <Anchor
                    style={{ padding: 20 }}
                    defaultSelectedKeys={["1"]}
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
            </Routes>

            <div style={{ position: "absolute", bottom: 0, left: 0, paddingLeft: 10 }}>
              <h5>{new Date().getFullYear()} &copy; Simon Mariani</h5>
            </div>
          </Sider>

          <Layout style={{ marginLeft: 300 }}>
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
              <Menu
                mode="horizontal"
                theme="light"
                items={headerItems}
                defaultSelectedKeys={["home"]}
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              />
            </Header>
            <Content
              style={{
                overflow: "auto",
                backgroundColor: "rgba(240, 240, 240, 1)",
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
                backgroundColor: "white",
              }}
            >
              {/* Footer content */}
            </Footer>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
