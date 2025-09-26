/** @format */

import { useRef, useEffect, useState } from "react";
import type { KeyboardEventHandler } from "react";
import { Input, theme } from "antd";
import type { InputRef } from "antd";
import { useGlobal } from "@/hooks/contexts/useGlobal";

// Global variables
const { useToken } = theme;

type ChatInputProps = {
  /* The current value of the input field */
  inputValue: string;

  /* Function to update the input value */
  setInputValue: (value: string) => void;

  /* Function to handle sending the message */
  handleSendMessage: () => void;
};

function ChatInput({ inputValue, setInputValue, handleSendMessage }: ChatInputProps) {
  // Get the theme token from antd
  const { token } = useToken();

  // Global context which we use here to store the global keyboard open state
  const { setKeyboardOpen } = useGlobal();

  // Input reference so we can focus on it but exclude this function on small screens
  const inputRef = useRef<InputRef | null>(null);
  useEffect(() => {
    if (token.useSmall) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }, [token.useSmall]);

  // Handle the enter key press to send the message
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Detect the keyboard open state on mobile by checking the window height change when the input is focussed
  const [isFocussed, setIsFocussed] = useState(false);
  useEffect(() => {
    // The initial height of the window and the resize event listener which checks the height difference
    // NOTE that we are using the visualviewport height as the actual viewport height stays the same when the keyboard is open
    const initialHeight = window.visualViewport!.height;
    const onResize = () => {
      const heightDiff = initialHeight - window.visualViewport!.height;
      setKeyboardOpen(heightDiff > 150); // ~150px+ drop = keyboard}
    };

    // Add and remove the event listener
    window.addEventListener("resize", onResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", onResize);
  }, [setKeyboardOpen, isFocussed]);

  // Return the component
  return (
    <div
      style={{
        width: token.useSmall ? "100%" : "65%",
        boxShadow: token.boxShadow,
        borderRadius: 10,
        pointerEvents: "auto",
      }}
    >
      <Input
        ref={inputRef}
        placeholder="Ask me anything about Simon Mariani..."
        type="text"
        size="large"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        // Assume that when the input is focused the keyboard is open (mobile only)
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        onKeyDown={handleKeyDown}
        style={{ color: token.colorTextAlternative }}
      />
    </div>
  );
}

export default ChatInput;
