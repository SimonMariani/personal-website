/** @format */

import { Row, Col, Input, Button } from "antd";
import React, { useState, useRef, useEffect } from "react";

let apiURL = "";
if (process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:8000";
  // apiURL = "http://localhost/api";
} else if (process.env.NODE_ENV === "production") {
  // apiURL = "https://simonmariani.com";
  // apiURL = "http://localhost/api";
  apiURL = "http://13.95.15.101/api";
} else {
  console.log("Unknown environment");
}

// ChatBox Component
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const message = { sender: "user", text: inputValue, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, message]);

    console.log("url: ", apiURL);

    try {
      // const response = await fetch("http://172.17.160.1:8000/talk/", {
      // const response = await fetch("http://localhost:8000/talk/", {
      const response = await fetch(apiURL + "/talk", {
        // const response = await fetch("http://backend:8000/talk/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          previousMessages: messages,
        }),
      });

      let data = await response.json();
      const responseMessage = { sender: "bot", text: data.response, timestamp: new Date() };

      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: "system", text: "Error: Could not send message.", timestamp: new Date() }]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action of the Enter key (e.g., form submission)
      handleSendMessage();
    }
  };

  const chatEndRef = useRef(null);

  useEffect(() => {
    setInputValue("");
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 50, overflow: "auto", padding: 10 }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: 10, textAlign: message.sender === "user" ? "right" : "left" }}>
            <div
              style={{
                display: "inline-block",
                padding: 10,
                borderRadius: 10,
                backgroundColor: message.sender === "user" ? "#e6f7ff" : "#f0f0f0",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 10 }}>
        <Row>
          <Col span={21}>
            <Input
              placeholder="Ask me anything about Simon Mariani..."
              type="text"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Chat;
