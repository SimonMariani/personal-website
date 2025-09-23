/** @format */

import { useEffect, useRef } from "react";
import type { Messages } from "../../types";
import ChatMessage from "./ChatMessage";
import ChatLoading from "./ChatLoading";
import { Flex } from "antd";

type ChatMessagesProps = {
  /* The list of messages to display */
  messages: Messages;

  /* Whether the chat is currently loading a response */
  loading: boolean;
};

function ChatMessages({ messages, loading }: ChatMessagesProps) {
  // Always scroll to the bottom on message update or loading state change. NOTE that we are using a timeout to ensure the DOM has updated before scrolling
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50); // 50ms delay

    return () => clearTimeout(timer);
  }, [messages, loading]);

  // Return the component
  return (
    // NOTE that we are using padding here solely so the box shadow does not get cut off
    <Flex vertical gap={12} style={{ padding: "0px 30px" }}>
      {/* The list of messages */}
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} chatEndRef={chatEndRef} />
      ))}

      {/* Loading indicator */}
      {loading && <ChatLoading />}
      {/* <ChatLoading /> */}

      {/* The element used to indicate the end of the chat */}
      <div ref={chatEndRef}></div>
    </Flex>
  );
}

export default ChatMessages;
