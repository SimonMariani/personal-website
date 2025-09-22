/** @format */

import { Row, Col, Input, Button, Flex } from "antd";
import { useState, useRef, useEffect, type KeyboardEventHandler } from "react";

let apiURL = "";
if (process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:8000";
} else if (process.env.NODE_ENV === "production") {
  apiURL = "https://simonmariani.com/api";
} else {
  console.error("Unknown environment");
}

type Message = {
  sender: "user" | "bot" | "system";
  text: string;
  timestamp: Date;
};

function Chat() {
  // State variables for messages and user input
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Async function to send a message to the backend server and update the state variable 'messages'
  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Update user messages when the user sends a message and clear the input value
    const message: Message = { sender: "user", text: inputValue, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue("");

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
      const data = await response.json();
      const responseMessage: Message = { sender: "bot", text: data.response, timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      // Catch the error and display a message to the user
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: "system", text: "Error: Could not send message.", timestamp: new Date() }]);
    }
  };

  // Function to handle send message on enter
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // When the messages update we scroll to the end of the chat and reset the input value
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Return the component
  // style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
  return (
    <div>
      {/* The box with the messages */}
      <div style={{ position: "absolute", top: 0, left: 5, right: 0, bottom: 50, overflow: "auto", padding: 10 }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: 15, marginLeft: 5, marginRight: 5, textAlign: message.sender === "user" ? "right" : "left" }}>
            <div
              style={{
                display: "inline-block",
                padding: 10,
                borderRadius: 10,
                // backgroundColor: message.sender === "user" ? "#e6f7ff" : "#f0f0f0",
                // boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      {/* The input box and send button */}

      <Flex gap={10} style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 50px 10px 50px" }}>
        <Input
          placeholder="Ask me anything about Simon Mariani..."
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </Flex>
    </div>
  );
}

export default Chat;
