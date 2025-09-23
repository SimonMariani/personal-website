/** @format */

import type { KeyboardEventHandler } from "react";
import { Input, theme } from "antd";

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

  // Handle the enter key press to send the message
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Return the component
  return (
    <div style={{ width: "65%", boxShadow: token.boxShadow, borderRadius: 10 }}>
      <Input
        placeholder="Ask me anything about Simon Mariani..."
        type="text"
        size="large"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ChatInput;
