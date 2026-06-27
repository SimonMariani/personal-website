/** @format */
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Typography, theme } from "antd";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/types";

// Global variables
const { useToken } = theme;
const { Text } = Typography;

type ChatMessageProps = {
  /* The message to display */
  message: Message;

  /* Whether the bot message should type itself out; false for messages restored from storage so they appear instantly */
  animate?: boolean;

  /* The speed at which the message is typed out (in ms per character) */
  typingSpeed?: number;

  /* Reference to the end of the chat for scrolling purposes */
  chatEndRef?: React.RefObject<HTMLDivElement | null>;
};

function ChatMessage({ message, animate = true, typingSpeed, chatEndRef }: ChatMessageProps) {
  // Get the theme token from antd
  const { token } = useToken();

  // State variable to hold the text that is currently displayed. NOTE that restored (non-animated) messages start fully shown to avoid re-typing on reload
  const [displayedText, setDisplayedText] = useState<string>(animate ? "" : message.text);

  useEffect(() => {
    // Display the full text immediately for user messages and for messages that should not animate (e.g. restored from storage)
    if (message.sender === "user" || !animate) {
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
  }, [message, animate, typingSpeed, chatEndRef]);

  // The chat message parent style depends on the sender
  const chatMessageParentStyle: CSSProperties =
    message.sender === "user" ? { alignSelf: "flex-end", textAlign: "right" } : { alignSelf: "flex-start", textAlign: "left" };

  // The style of the chat message itself depends on the sender as well
  const chatMessageStyle: CSSProperties =
    message.sender === "user" ? { textAlign: "right", backgroundColor: token.colorSecondary } : { textAlign: "left", backgroundColor: token.colorPrimary };

  // Return the component
  return (
    <div
      style={{
        maxWidth: "83%",
        pointerEvents: "auto",
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
        {/* User messages are shown verbatim; bot messages are rendered as markdown so lists, links and emphasis display properly. NOTE that react-markdown
        does not render raw HTML, so this is safe against injection. The .chatMarkdown class tightens the default block margins (see App.css) */}
        {message.sender === "bot" ? (
          <div className="chatMarkdown" style={{ color: token.colorText, fontSize: token.fontSize, fontFamily: token.fontFamily, textAlign: "left" }}>
            <ReactMarkdown
              components={{
                a: ({ ...props }) => <a {...props} target="_blank" rel="noreferrer" style={{ color: token.colorTextBase }} />,
              }}
            >
              {displayedText}
            </ReactMarkdown>
          </div>
        ) : (
          <Text style={{ fontSize: token.fontSize }}>{displayedText}</Text>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
