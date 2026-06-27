/** @format */

import { Flex, Typography, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;
const { Title, Text } = Typography;

function NotFound() {
  // Get the theme tokens for styling
  const { token } = useToken();

  // Navigate hook so the button can send the visitor back to the home page
  const navigate = useNavigate();

  // Return the component
  return (
    <Flex vertical justify="center" align="center" gap={15} style={{ height: "100%", width: "100%", backgroundColor: token.colorBgFooter }}>
      {/* The error code and a short explanation */}
      <Title style={{ margin: 0 }}>404</Title>
      <Text type="secondary">This page does not exist.</Text>

      {/* The button to return home */}
      <Button type="primary" onClick={() => navigate("/")}>
        Back to home
      </Button>
    </Flex>
  );
}

export default NotFound;
