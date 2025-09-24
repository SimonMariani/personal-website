/** @format */

import { Flex, Typography, Button, Carousel } from "antd";
import experienceConfig from "@/config/experience";
import Chat from "@/components/chat/Chat";
import ContactText from "@/components/contact/ContactText";
import ContactDivider from "@/components/contact/ContactDivider";
import RadarChart from "@/components/charts/RadarChart";
import TreeMapChart from "@/components/charts/TreemapChart";
import PolarChart from "@/components/charts/PolarChart";
import RadialBarChart from "@/components/charts/RadialBarChart";
import BarChart from "@/components/charts/BarChart";
import ColumnChart from "@/components/charts/ColumnChart";

const { Title } = Typography;

function ChatPage() {
  // Return the component
  return (
    <Flex vertical style={{ height: "100%", width: "100%" }}>
      {/* The background is a chart */}
      <div style={{ position: "absolute", inset: 0 }}>test{/* <RadarChart data={aiExperience} /> */}</div>

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
        {/* overflow: "hidden" */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Carousel arrows infinite={true}>
            <RadarChart data={experienceConfig.programmingLanguages} opacity={0.3} padding={0} />
            <PolarChart data={experienceConfig.backend} opacity={0.3} padding={50} />
            <PolarChart data={experienceConfig.frontend} opacity={0.3} padding={50} />
            <TreeMapChart data={experienceConfig.developmentTools} opacity={0.3} padding={70} />
            <RadialBarChart data={experienceConfig.aiExperience} opacity={0.3} padding={20} />
            <ColumnChart data={experienceConfig.aiFrameworks} opacity={0.3} padding={85} />
            <BarChart data={experienceConfig.otherSoftware} opacity={0.3} padding={85} />
          </Carousel>
        </div>

        {/* Then the chat window */}
        <Flex style={{ width: "55%", height: "90%", zIndex: 1, pointerEvents: "none" }}>
          <Chat />
        </Flex>
      </Flex>

      {/* The footer which contains some contact information */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#292929ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
        {/* Contact information */}
        <Flex gap={10} align="center">
          <ContactText text="simon.mariani65@gmail.com" />
          <ContactDivider />
          <ContactText text="linkedin.com/in/simon-mariani65" link="https://linkedin.com/in/simon-mariani65" />
          <ContactDivider />
          <ContactText text="github.com/SimonMariani" link="https://github.com/SimonMariani" />
          <ContactDivider />
          <ContactText text="Berlin, Germany" />
        </Flex>

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
