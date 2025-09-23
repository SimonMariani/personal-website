/** @format */
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Typography, theme } from "antd";
import type { Message } from "@/types";

// Global variables
const { useToken } = theme;
const { Text } = Typography;

type ChatMessageProps = {
  /* The message to display */
  message: Message;

  /* The speed at which the message is typed out (in ms per character) */
  typingSpeed?: number;

  /* Reference to the end of the chat for scrolling purposes */
  chatEndRef?: React.RefObject<HTMLDivElement | null>;
};

function ChatMessage({ message, typingSpeed, chatEndRef }: ChatMessageProps) {
  // Get the theme token from antd
  const { token } = useToken();

  // State variable to hold the text that is currently displayed
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    // If the message is from the user, display it immediately
    if (message.sender === "user") {
      setDisplayedText(message.text);
      return;
    }

    // For bot messages, simulate typing effect by revealing one character at a time
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(message.text.slice(0, index + 1));
      chatEndRef?.current?.scrollIntoView({ behavior: "smooth" });
      index++;
      if (index >= message.text.length) {
        clearInterval(interval);
      }
    }, typingSpeed || 5);

    // Cleanup if component unmounts
    return () => clearInterval(interval);
  }, [message, typingSpeed, chatEndRef]);

  // The chatmessage parent style depends on the sender
  const chatMessageParentStyle: CSSProperties =
    message.sender === "user" ? { alignSelf: "flex-end", textAlign: "right" } : { alignSelf: "flex-start", textAlign: "left" };

  // The style of the cahtmessage itself depends on the sender as well
  const chatMessageStyle: CSSProperties =
    message.sender === "user" ? { textAlign: "right", backgroundColor: token.colorSecondary } : { textAlign: "left", backgroundColor: token.colorPrimary };

  // Return the component
  return (
    <div
      style={{
        width: "83%",
        ...chatMessageParentStyle,
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "10px 20px",
          borderRadius: token.borderRadius,
          boxShadow: token.boxShadow,
          ...chatMessageStyle,
        }}
      >
        <Text style={{ color: "white", fontSize: token.fontSize }}>{displayedText}</Text>
      </div>
    </div>
  );
}

export default ChatMessage;
