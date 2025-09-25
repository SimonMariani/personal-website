/** @format */

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
const { Title } = Typography;

function ChatPage() {
  // Get the theme tokens
  const { token } = useToken();

  // Return the component
  return (
    <Flex vertical style={{ height: "100%", width: "100%" }}>
      {/* The header which consists */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#242424ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
        {/* The title */}
        <Title style={{ margin: 0 }} level={3}>
          Simon Mariani
        </Title>
      </Flex>

      {/* The chat window aligned in the center of the page */}
      <Flex
        justify="center"
        align="center"
        style={{
          position: "relative",
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {/* The background is a chart NOTE: we set overflow to hidden because the background chart should not create scrollbars */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Carousel arrows infinite={true}>
            <RadarChart data={experienceConfig.programmingLanguages} opacity={0.4} padding={50} title="Programming Languages" />
            <PolarChartMonochrome data={experienceConfig.backend} opacity={0.4} padding={50} title="Backend Development" />
            <RadialBarChart data={experienceConfig.frontend} opacity={0.4} padding={50} title="Frontend Development" />
            <TreeMapChart data={experienceConfig.developmentTools} opacity={0.4} padding={50} title="Development Tools" />
            <PolarChart data={experienceConfig.aiExperience} opacity={0.4} padding={50} title="AI Experience" />
            <ColumnChart data={experienceConfig.aiFrameworks} opacity={0.4} padding={50} title="AI Frameworks" />
            <BarChart data={experienceConfig.otherSoftware} opacity={0.3} padding={50} title="Other Software" />
          </Carousel>
        </div>

        {/* Then the chat window */}
        <Flex
          style={{
            width: token.useSmall ? "100%" : "50%",
            height: token.useSmall ? "100%" : "90%",
            zIndex: 1,
            pointerEvents: "none",
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
