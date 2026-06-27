/** @format */

import { useState } from "react";
import { Flex, Typography, Button, Carousel, theme } from "antd";
import experienceConfig from "@/config/experience";
import { useGlobal } from "@/hooks/contexts/useGlobal";
import Chat from "@/components/chat/Chat";
import ContactCard from "@/components/contact/ContactCard";
import ContactModal from "@/components/contact/ContactModal";
import ContactFormModal from "@/components/contact/ContactFormModal";
import RadarChart from "@/components/charts/RadarChart";
import TreemapChart from "@/components/charts/TreemapChart";
import PolarChart from "@/components/charts/PolarChart";
import PolarChartMonochrome from "@/components/charts/PolarChartMonochrome";
import RadialBarChart from "@/components/charts/RadialBarChart";
import BarChart from "@/components/charts/BarChart";
import ColumnChart from "@/components/charts/ColumnChart";

const { useToken } = theme;
const { Title, Text } = Typography;

function MainPage() {
  // Get the theme tokens
  const { token } = useToken();

  const { keyboardOpen } = useGlobal();

  // Show the chat boolean
  const [showChat, setShowChat] = useState(true);

  // The charts are dimmed while the chat is shown so the chat stays readable
  const graphOpacity = showChat ? 0.3 : 1;

  // Return the component
  return (
    <Flex vertical style={{ height: "100%", width: "100%" }}>
      {/* The header which consists */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: token.colorBgHeader, boxShadow: token.boxShadowHeader }}>
        {/* The title */}
        <Title style={{ margin: 0 }} level={3}>
          Simon Mariani
        </Title>

        {/* The button to show/hide the chat */}
        <Flex justify="middle" align="center">
          <Text onClick={() => setShowChat(!showChat)} style={{ color: showChat ? token.colorText : token.colorPrimary, cursor: "pointer" }}>
            {showChat ? "Hide" : "Show"} Chat
          </Text>
        </Flex>
      </Flex>

      {/* The chat window aligned in the center of the page */}
      <Flex
        justify="center"
        align="center"
        style={{
          position: "relative",
          flexGrow: 1,
          overflow: "hidden", // NOTE this is important so the container doesn't grow too much
        }}
      >
        {/* The background is a chart carousel. NOTE that we use the useSmall value as key to force a rerender when the window is resized, this is necessary 
        because the graphs depend on the size of the parent container and without this the spacing becomes weird*/}
        <div
          className="chartsCarousel"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: graphOpacity,
            padding: token.useSmall ? `0px 10px 50px 10px` : 50,
          }}
          key={`${token.useSmall}`}
        >
          <Carousel arrows infinite={true} draggable={true}>
            <RadarChart data={experienceConfig.programmingLanguages} title="Programming Languages" />
            <PolarChartMonochrome data={experienceConfig.backend} title="Backend Development" />
            <RadialBarChart data={experienceConfig.frontend} title="Frontend Development" />
            <TreemapChart data={experienceConfig.deploymentTools} title="Deployment Tools" />
            <PolarChartMonochrome data={experienceConfig.databases} title="Databases" />
            <TreemapChart data={experienceConfig.cloudPlatforms} title="Cloud Platforms" />
            <PolarChart data={experienceConfig.aiTools} title="AI Tools" />
            <BarChart data={experienceConfig.aiFields} title="AI Fields" />
            <PolarChart data={experienceConfig.modelsAndArchitectures} title="Models & Architectures" />
            <ColumnChart data={experienceConfig.otherSoftware} title="Other Software" />
          </Carousel>
        </div>

        {/* Then the chat window, NOTE that we put pointerevents to none so that we can still interact with the charts even though this element is on top */}
        <Flex
          style={{
            width: token.useSmall ? "100%" : "50%",
            height: token.useSmall ? "100%" : "90%",
            zIndex: 1,
            pointerEvents: "none",
            visibility: showChat ? "visible" : "hidden",
          }}
        >
          <Chat active={showChat} />
        </Flex>
      </Flex>

      {/* The footer which contains some contact information */}
      {!keyboardOpen && (
        <Flex
          justify="space-between"
          align="middle"
          style={{
            padding: "15px 20px",
            backgroundColor: token.colorBgFooter,
            boxShadow: token.boxShadowHeader,
          }}
        >
          {/* Contact information */}
          {token.useSmall ? <ContactModal /> : <ContactCard direction="horizontal" />}

          {/* The action buttons: contact form and CV */}
          <Flex gap={10} align="center">
            <ContactFormModal />

            {/* Button to show the CV */}
            <Button
              type="primary"
              onClick={() => {
                window.open("/Simon_Mariani_CV.pdf", "_blank");
              }}
            >
              CV
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default MainPage;
