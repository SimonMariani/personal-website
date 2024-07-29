/** @format */

import React, { useState } from "react";
import { Button, Card, FloatButton } from "antd";
import { CloseOutlined, WechatWorkOutlined } from "@ant-design/icons";

import Chat from "./Chat";

function ChatBox() {
  const [chatBoxVisible, setChatBoxVisible] = useState(false);

  const toggleChatBox = () => {
    setChatBoxVisible(!chatBoxVisible);
  };

  return (
    <div>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ width: 70, height: 70, boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }}
        icon={<WechatWorkOutlined style={{ fontSize: 30, position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }} />}
        onClick={toggleChatBox}
      />
      <Card
        title={"Ask anything about Simon"}
        extra={
          <Button
            type="text"
            className="close-button"
            icon={<CloseOutlined />}
            onClick={() => {
              toggleChatBox();
            }}
          />
        }
        style={{
          zIndex: 1000,
          position: "fixed",
          bottom: 130,
          right: 20,
          width: 500,
          height: 600,
          border: "1px solid #ccc",
          boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
          display: chatBoxVisible ? "block" : "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0, top: 56, overflow: "auto", padding: 20 }}>
          <Chat />
        </div>
      </Card>
    </div>
  );
}

export default ChatBox;
