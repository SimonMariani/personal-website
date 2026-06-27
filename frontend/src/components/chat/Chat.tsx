/** @format */

import { useState, useRef, useEffect } from "react";
import { Flex, Typography, theme } from "antd";
import { apiURL } from "@/config/config";
import type { Message, Messages } from "@/types";
import { useGlobal } from "@/hooks/contexts/useGlobal";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import ChatStarters from "@/components/chat/ChatStarters";

const { useToken } = theme;
const { Text } = Typography;

// The sessionStorage key under which the conversation is persisted so a page reload keeps the chat
const STORAGE_KEY = "chatMessages";

// Read the persisted conversation from sessionStorage, returning an empty list if there is nothing (or it is corrupt)
const loadMessages = (): Messages => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Messages) : [];
  } catch {
    return [];
  }
};

type ChatProps = {
  /* Whether the chat is currently shown; the smooth-scroll listener is only attached while active */
  active?: boolean;
};

function Chat({ active = true }: ChatProps) {
  // Get the theme token
  const { token } = useToken();

  // Global context which we use here to store the global keyboard open state
  const { keyboardOpen } = useGlobal();

  // State variables for messages, user input and loading state. NOTE that messages are seeded from sessionStorage so a reload keeps the conversation
  const [messages, setMessages] = useState<Messages>(loadMessages);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // The number of messages restored from sessionStorage. These were already typed out in a previous session, so they should appear instantly instead of
  // re-running the typing animation on reload. Anything after this index is new and animates. NOTE that we reset it to 0 when the conversation is cleared
  const restoredCount = useRef<number>(messages.length);

  // Persist the conversation to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Clear the conversation and remove it from sessionStorage. NOTE that we reset the restored count so messages sent after a reset animate normally
  const handleReset = () => {
    restoredCount.current = 0;
    setMessages([]);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  // Async function to send a message to the api server and update the state variable 'messages'. NOTE that an explicit text can be passed (used by the
  // starter questions); otherwise the current input value is used
  const handleSendMessage = async (text?: string) => {
    // Resolve the text to send and do nothing if it is empty
    const messageText = (text ?? inputValue).trim();
    if (messageText === "") return;

    // Update user messages when the user sends a message and clear the input value
    const message: Message = { sender: "user", text: messageText, timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, message]);
    setInputValue("");
    setLoading(true);

    // Try to send the message to the api server
    try {
      // Send the message to the api server
      const response = await fetch(apiURL + "/answer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          previousMessages: messages,
        }),
      });

      // NOTE that fetch only rejects on network errors, so we check the status ourselves and surface server errors via the catch block below
      if (!response.ok) throw new Error(`Server returned ${response.status}`);
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

      // Update the response message with the error
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

  // Custom smooth scrolling logic, NOTE that we need this because this element doesn't have any pointer events so the user can interact with the charts
  // The ref to the container that is supposed to scroll, the desired scroll position which changes on every wheel event and whether we are currently scrolling
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollTarget = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  // Only mount the event listener while the chat is active, NOTE that otherwise it would hijack window scrolling even when the chat is hidden
  useEffect(() => {
    if (!active) return;

    const handleWheel = (event: WheelEvent) => {
      // Prevent window scroll and return if there is no container
      event.preventDefault();
      if (!containerRef.current) return;

      // Update the scroll target based on the wheel delta, NOTE that we are making sure that the scroll target is within bounds, i.e. >= 0 and <= max scroll
      scrollTarget.current += event.deltaY;
      const maxScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      scrollTarget.current = Math.max(0, Math.min(scrollTarget.current, maxScroll));

      // If the user is not currently scrolling, start the smooth scroll
      if (!isScrolling.current) {
        isScrolling.current = true;
        // Additional requestAnimationFrame info: https://dev.to/tawe/requestanimationframe-explained-why-your-ui-feels-laggy-and-how-to-fix-it-3ep2
        requestAnimationFrame(smoothScroll);
      }
    };

    // The smooth scroll function
    const smoothScroll = () => {
      // Return if there is no container
      if (!containerRef.current) return;

      // Obtain the difference between the current scroll position and the target scroll position, then determine the step size
      const current = containerRef.current.scrollTop;
      const diff = scrollTarget.current - current;
      const step = diff * 0.2; // smoothing factor
      containerRef.current.scrollTop = current + step;

      // If the difference is still significant, continue scrolling, else stop scrolling and set isScrolling to false
      // NOTE that if this threshold is too small it will get stuck in an infinite loop
      if (Math.abs(diff) > 5) {
        requestAnimationFrame(smoothScroll);
      } else {
        isScrolling.current = false;
      }
    };

    // Add the event listener to the window
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [active]);

  // Return the component
  return (
    <Flex
      vertical
      justify={messages.length > 0 ? (keyboardOpen ? "end" : "space-between") : "center"}
      gap={20}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {/* The reset button, only shown when there is a conversation to clear. NOTE that pointerEvents must be auto because the chat container disables them */}
      {messages.length > 0 && (
        <Text
          onClick={handleReset}
          style={{
            position: "absolute",
            top: 0,
            right: token.useSmall ? 15 : 0,
            zIndex: 2,
            color: token.colorPrimary,
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          Reset
        </Text>
      )}

      {/* The box with the messages. NOTE that we add top padding when there is a conversation so the first message clears the absolutely-positioned reset button */}
      <div
        ref={containerRef}
        style={{
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          padding: messages.length > 0 ? "30px 0 0 0" : token.useSmall ? "15px 0 0 0" : 0,
        }}
      >
        <ChatMessages messages={messages} loading={loading} restoredCount={restoredCount.current} />
      </div>

      {/* The input box and send button */}
      <Flex vertical gap={10} style={{ padding: token.useSmall ? "0px 15px 15px 15px" : 0 }}>
        <Flex justify="center" gap={10}>
          <ChatInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} />
        </Flex>

        {/* When there is no conversation yet, show clickable starter questions below the input to help the visitor get going */}
        {messages.length === 0 && !loading && <ChatStarters onSelect={(question) => handleSendMessage(question)} />}
      </Flex>
    </Flex>
  );
}

export default Chat;
