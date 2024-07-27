/** @format */

import React, { useState } from "react";
import { Grid, Row, Col, Layout, Flex, Button, Menu, Divider, Card, FloatButton } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LineChartOutlined,
  ProfileOutlined,
  CloseOutlined,
  CalendarOutlined,
  // CompassOutlined,
  TableOutlined,
  BoxPlotOutlined,
  InfoOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

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
        style={{ width: 100, height: 100, boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }}
        icon={<CustomerServiceOutlined style={{ fontSize: 40, position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }} />}
        onClick={toggleChatBox}
      />
      <Card
        title={"Chat with Simon"}
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
          bottom: 170,
          right: 20,
          width: 700,
          height: 850,
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
