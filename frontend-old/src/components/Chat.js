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
  apiURL = "https://simonmariani.com/api";
  // apiURL = "http://simonmariani.com/api";
  // apiURL = "http://13.95.15.101/api";
} else {
  console.log("Unknown environment");
}

// ChatBox Component
const Chat = () => {
  /**
   * Chat component that sends chat messages to the backend server and displays the responses.
   * The chat messages are stored in the 'messages' state variable which is used to give context to the backend server.
   */

  // State variables for messages and user input
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Async function to send a message to the backend server and update the state variable 'messages'
  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Update user messages when the user sends a message
    const message = { sender: "user", text: inputValue, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, message]);

    // Send the message to the backend server and update with the response
    try {
      const response = await fetch(apiURL + "/talk/", {
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
      // Catch the error and display a message to the user
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: "system", text: "Error: Could not send message.", timestamp: new Date() }]);
    }
  };

  // Function to handle send message on enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Reference to the end of the chat messages so we can scroll down after each message
  const chatEndRef = useRef(null);

  // When the messages update we scroll to the end of the chat and reset the input value
  useEffect(() => {
    // TODO this also triggers when the system message arrives and you're typing a new messag already
    setInputValue("");
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Return the component
  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 5, right: 0, bottom: 50, overflow: "auto", padding: 10 }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: 15, marginLeft: 5, marginRight: 5, textAlign: message.sender === "user" ? "right" : "left" }}>
            <div
              style={{
                display: "inline-block",
                padding: 10,
                borderRadius: 10,
                backgroundColor: message.sender === "user" ? "#e6f7ff" : "#f0f0f0",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
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
          <Col flex={1}>
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
          <Col>
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
