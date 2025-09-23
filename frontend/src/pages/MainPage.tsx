/** @format */

import { theme, Flex, Typography, Button, Divider } from "antd";
import Chat from "@/components/chat/Chat";

const { useToken } = theme;
const { Title, Text } = Typography;

function ChatPage() {
  // Get the theme token for styling
  const { token } = useToken();
  // Return the component
  return (
    <Flex vertical style={{ height: "100%", width: "100%" }}>
      {/* The header which consists */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#242424ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
        {/* The title */}
        <Title style={{ color: "white", margin: 0 }} level={3}>
          Simon Mariani
        </Title>
      </Flex>

      {/* The chat window aligned in the center of the page */}
      <Flex
        justify="center"
        align="center"
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Flex style={{ width: "55%", height: "90%" }}>
          <Chat />
        </Flex>
      </Flex>

      {/* The footer which contains some contact information */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px", backgroundColor: "#292929ff", boxShadow: "10px 0 20px rgba(0, 0, 0, 0.5)" }}>
        {/* Contact information */}
        <Flex gap={10} align="center">
          <Text style={{ color: "white", margin: 0 }} type="secondary">
            simon.mariani65@gmail.com
          </Text>

          <Divider type="vertical" style={{ backgroundColor: token.colorPrimary, height: 20 }} />

          <a href="https://linkedin.com/in/simon-mariani65" target="_blank" rel="noopener noreferrer">
            <Text style={{ color: "white", margin: 0 }} type="secondary">
              linkedin.com/in/simon-mariani65
            </Text>
          </a>

          <Divider type="vertical" style={{ backgroundColor: token.colorPrimary, height: 20 }} />

          <a href="https://github.com/SimonMariani" target="_blank" rel="noopener noreferrer">
            <Text style={{ color: "white", margin: 0 }} type="secondary">
              github.com/SimonMariani
            </Text>
          </a>

          <Divider type="vertical" style={{ backgroundColor: token.colorPrimary, height: 20 }} />

          <Text style={{ color: "white", margin: 0 }} type="secondary">
            Berlin, Germany
          </Text>
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
