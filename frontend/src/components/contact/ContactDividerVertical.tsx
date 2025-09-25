/** @format */

import { Divider, theme } from "antd";

const { useToken } = theme;

function ContactDividerVertical() {
  // Get the theme token for styling
  const { token } = useToken();

  // Return the component
  return <Divider type="vertical" style={{ backgroundColor: token.colorPrimary, height: 20 }} />;
}

export default ContactDividerVertical;
