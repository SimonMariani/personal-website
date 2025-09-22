/** @format */

import { Button, Flex, Typography } from "antd";
import Chat from "@/components/chat/Chat";

const { Title } = Typography;

function ChatPage() {
  return (
    // style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
    <Flex vertical>
      <Title style={{ position: "absolute", top: 20, left: 20, margin: 0 }} level={3}>
        Chat with Simon Mariani
      </Title>

      <Button type="primary">testing</Button>

      <Flex
        justify="center"
        align="middle"
        style={{ width: "50%", height: "50%", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <Chat />
      </Flex>
    </Flex>
  );
}

export default ChatPage;
