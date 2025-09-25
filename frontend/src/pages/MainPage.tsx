/** @format */

import { useEffect, useState } from "react";
import { Flex, Typography, Button, Carousel, theme } from "antd";
import experienceConfig from "@/config/experience";
import Chat from "@/components/chat/Chat";
import ContactCardHorizontal from "@/components/contact/ContactCardHorizontal";
import ContactModal from "@/components/contact/ContactModal";
import RadarChart from "@/components/charts/RadarChart";
import TreeMapChart from "@/components/charts/TreemapChart";
import PolarChart from "@/components/charts/PolarChart";
import PolarChartMonochrome from "@/components/charts/PolarChartMonochrome";
import RadialBarChart from "@/components/charts/RadialBarChart";
import BarChart from "@/components/charts/BarChart";
import ColumnChart from "@/components/charts/ColumnChart";

const { useToken } = theme;
const { Title, Text } = Typography;

function ChatPage() {
  // Get the theme tokens
  const { token } = useToken();

  // Show the chat boolean
  const [showChat, setShowChat] = useState(true);

  // Graph opacity
  const [graphOpacity, setGraphOpacity] = useState(1);
  useEffect(() => {
    if (showChat) {
      setGraphOpacity(0.3);
    } else {
      setGraphOpacity(1);
    }
  }, [showChat]);

  // Return the component
  return (
    <Flex vertical style={{ height: "100%", width: "100%" }}>
      {/* The header which consists */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#242424ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
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
            <TreeMapChart data={experienceConfig.developmentTools} title="Development Tools" />
            <BarChart data={experienceConfig.aiExperience} title="AI Experience" />
            <PolarChart data={experienceConfig.aiFrameworks} title="AI Frameworks" />
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
          <Chat />
        </Flex>
      </Flex>

      {/* The footer which contains some contact information */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#292929ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
        {/* Contact information */}
        {token.useSmall ? <ContactModal /> : <ContactCardHorizontal />}

        {/* Button to show the  CV */}
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
  );
}

export default ChatPage;
