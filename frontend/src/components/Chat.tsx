/** @format */

import { useState } from "react";
import { Flex } from "antd";
import { apiURL } from "@/config/config";
import type { Message } from "@/types";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function Chat() {
  // State variables for messages, user input and loading state
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Async function to send a message to the backend server and update the state variable 'messages'
  const handleSendMessage = async () => {
    // Do nothing if the input value is empty
    if (inputValue.trim() === "") return;

    // Update user messages when the user sends a message and clear the input value
    const message: Message = { sender: "user", text: inputValue, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue("");
    setLoading(true);

    // Try to send the message to the backend server
    try {
      // Send the message to the backend server
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

      // Update bot messages when the bot responds
      const responseMessage: Message = { sender: "bot", text: data.response, timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      // Catch the error and check the type to
      let errorMessage = "Could not send message.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      // Update the reposne message with the error
      const responseMessage: Message = {
        sender: "bot",
        text: `Error: ${errorMessage}`,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Return the component
  return (
    <Flex vertical justify={messages.length > 0 ? "space-between" : "center"} gap={20} style={{ width: "100%", height: "100%" }}>
      {/* The box with the messages */}
      <div
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ChatMessages messages={messages} loading={loading} />
      </div>

      {/* The input box and send button */}
      <Flex justify="center" gap={10}>
        <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} />
      </Flex>
    </Flex>
  );
}

export default Chat;
