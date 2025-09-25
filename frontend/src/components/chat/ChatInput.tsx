/** @format */

import { useRef, useEffect } from "react";
import type { KeyboardEventHandler } from "react";
import { Input, theme } from "antd";
import type { InputRef } from "antd";

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
        onKeyDown={handleKeyDown}
        style={{ color: token.colorTextAlternative }}
      />
    </div>
  );
}

export default ChatInput;
