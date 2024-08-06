/** @format */

import React, { useState, useEffect } from "react";
import { Flex, Button, Card, FloatButton, Popover } from "antd";
import { CloseOutlined, WechatWorkOutlined } from "@ant-design/icons";

import Chat from "./Chat";

function ChatBox({ useSmall }) {
  const [chatBoxVisible, setChatBoxVisible] = useState(false);
  const [popoverpOpen, setPopoverOpen] = useState(false);

  const toggleChatBox = () => {
    setPopoverOpen(false);
    setChatBoxVisible(!chatBoxVisible);
  };

  const props = useSmall ? { left: 0, right: 0, top: 0 } : { right: 20, width: 500, height: 550 };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopoverOpen(true);
    }, 2000);

    // Cleanup the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Popover
        content={
          <div>
            I have been trained on Simon's data.
            <br />
            May I assist you with any questions?
          </div>
        }
        title={
          <Flex justify="space-between">
            <strong>Hello!</strong>
            <CloseOutlined onClick={() => setPopoverOpen(false)} />
          </Flex>
        }
        open={popoverpOpen}
      >
        <FloatButton
          shape="circle"
          type="primary"
          style={{ width: 70, height: 70, boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }}
          icon={<WechatWorkOutlined style={{ fontSize: 30, position: "absolute", left: "50%", transform: "translate(-50%, -50%)" }} />}
          onClick={toggleChatBox}
        />
      </Popover>
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
          ...props,
          border: "1px solid #ccc",
          boxShadow: "10px 10px 10px rgba(0,0,0,0.5)",
          display: chatBoxVisible ? "block" : "none",
        }}
      >
        <div style={{ position: "absolute", inset: 0, top: 56, overflow: "auto", padding: 20 }}>
          <Chat />
        </div>
      </Card>
    </>
  );
}

export default ChatBox;
