/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Link as RouterLink, Navigate } from "react-router-dom"; // , Switch, Link
import { Grid, Layout, Menu, Anchor } from "antd";
import { HomeOutlined, ProjectOutlined, CheckOutlined } from "@ant-design/icons";
// import Simon from "./assets/images/simon28.jpg";
// import Logo from "./assets/images/ailogo.jpg";
// import LogoSimon from "./assets/images/logo_simon.png";
import LogoSimon from "./assets/images/logo_simon_no_background.png";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ChatBox from "./components/ChatBox";
import ScrollToTop from "./components/ScrollToTop";
const { useBreakpoint } = Grid;
const { Header, Sider, Footer, Content } = Layout;

const headerItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <RouterLink to="/home">Home</RouterLink>,
  },
  {
    key: "skills",
    icon: <CheckOutlined />,
    label: <RouterLink to="/skills">Skills</RouterLink>,
  },
  {
    key: "projects",
    icon: <ProjectOutlined />,
    label: <RouterLink to="/projects">Projects</RouterLink>,
  },
];

function App() {
  const screens = useBreakpoint();
  const useSmall = (screens.xs || screens.sm) && !screens.md ? true : false;

  const siderWidth = useSmall ? 0 : 300;

  return (
    <BrowserRouter>
      <div className="App">
        {/* Component used to always scroll to the top when the page changes */}
        <ScrollToTop />

        <Layout>
          <Sider
            width={siderWidth}
            collapsedWidth={100}
            theme="light"
            trigger={null}
            collapsible
            collapsed={false}
            style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
          >
            <img src={LogoSimon} alt="unavailable" style={{ width: 200, paddingTop: 20 }} />
            <Routes>
              <Route
                path="/home"
                element={
                  <Anchor
                    targetOffset={70}
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
                        key: "12",
                        href: "#publications",
                        title: "Publications",
                      },
                      {
                        key: "13",
                        href: "#languages",
                        title: "Languages",
                      },
                    ]}
                  />
                }
              ></Route>

              <Route
                path="/skills"
                element={
                  <Anchor
                    targetOffset={70}
                    style={{ padding: 20 }}
                    defaultSelectedKeys={["1"]}
                    items={[
                      {
                        key: "5",
                        href: "#programming-languages",
                        title: "Programming Languages",
                      },
                      {
                        key: "6",
                        href: "#web-development",
                        title: "Web Development",
                      },
                      {
                        key: "7",
                        href: "#ai-frameworks",
                        title: "AI Frameworks",
                      },
                      {
                        key: "8",
                        href: "#other-software",
                        title: "Other Software",
                      },
                      {
                        key: "9",
                        href: "#development-tools",
                        title: "Development Tools",
                      },
                      {
                        key: "10",
                        href: "#ai-experience",
                        title: "AI Experience",
                      },
                    ]}
                  />
                }
              ></Route>
              <Route
                path="/projects"
                element={
                  <Anchor
                    targetOffset={70}
                    style={{ padding: 20 }}
                    defaultSelectedKeys={["1"]}
                    items={[
                      {
                        key: "1",
                        href: "#general",
                        title: "General",
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

          <Layout style={{ marginLeft: siderWidth }}>
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
              <ChatBox useSmall={useSmall} />
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home useSmall={useSmall} />} />
                <Route path="/skills" element={<Skills useSmall={useSmall} />} />
                <Route path="/projects" element={<Projects useSmall={useSmall} />} />
              </Routes>
            </Content>
            <Footer
              style={{
                textAlign: "start",
                backgroundColor: "white",
              }}
            >
              {/* <h4>
                <a href="/home#contact-information" repl>
                  Contact me!
                </a>
              </h4> */}
            </Footer>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
