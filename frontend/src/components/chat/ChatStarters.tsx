/** @format */

import { Flex, Button, theme } from "antd";

const { useToken } = theme;

// The starter questions shown on an empty chat to help the visitor get going
const starterQuestions = ["What is Simon's experience with AI?", "What tech stack does he use?", "Tell me about his work experience"];

type ChatStartersProps = {
  /* Called with the chosen question when a starter is clicked */
  onSelect: (question: string) => void;
};

function ChatStarters({ onSelect }: ChatStartersProps) {
  // Get the theme token from antd
  const { token } = useToken();

  // Return the component, NOTE that pointerEvents must be auto because the chat container disables them. The default antd button renders near-invisible under
  // this theme (white text on a light background), so we set an explicit dark background with white text to match the chat
  return (
    <Flex wrap justify="center" gap={10} style={{ pointerEvents: "auto" }}>
      {starterQuestions.map((question) => (
        <Button
          key={question}
          onClick={() => onSelect(question)}
          style={{
            whiteSpace: "normal",
            height: "auto",
            padding: "6px 14px",
            color: token.colorText,
            backgroundColor: token.colorBgFooter,
            borderColor: token.colorSecondary,
          }}
        >
          {question}
        </Button>
      ))}
    </Flex>
  );
}

export default ChatStarters;
