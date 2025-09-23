/** @format */

import { Flex, Typography, Button } from "antd";
import Chat from "@/components/Chat";

const { Title } = Typography;

function ChatPage() {
  return (
    <Flex vertical>
      {/* The header which consists of a title and a button */}
      <Flex justify="space-between" align="middle" style={{ padding: "15px 20px" }}>
        {/* The title */}
        <Title style={{ color: "white", margin: 0 }} level={3}>
          Personal Website of Simon Mariani
        </Title>

        {/* Button to show the  CV */}
        <Button
          type="primary"
          onClick={() => {
            window.open("/Simon_Mariani_CV.pdf", "_blank");
          }}
        >
          Simon Mariani CV
        </Button>
      </Flex>

      {/* The chat window aligned in the center of the page */}
      <Flex
        style={{
          width: "50%",
          height: "90%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Chat />
      </Flex>
    </Flex>
  );
}

export default ChatPage;
