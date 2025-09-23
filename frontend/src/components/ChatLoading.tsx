/** @format */
import { Space, theme } from "antd";

// Global variables
const { useToken } = theme;

function ChatLoading() {
  // The global antd theme token
  const { token } = useToken();

  // The style for each dot in the loading indicator
  const dotStyle: React.CSSProperties = {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: token.colorPrimary,
    display: "inline-block",
    animation: "bounce 1.4s infinite ease-in-out both",
  };

  // Return the loading indicator
  return (
    <>
      {/* Keyframes for the animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}
      </style>

      {/* The loading dots */}
      <Space>
        <span style={{ ...dotStyle, animationDelay: "0s" }} />
        <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
        <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
      </Space>
    </>
  );
}

export default ChatLoading;
