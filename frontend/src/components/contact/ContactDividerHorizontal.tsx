/** @format */

import { Divider, theme } from "antd";

const { useToken } = theme;

function ContactDividerHorizontal() {
  // Get the theme token for styling
  const { token } = useToken();

  // Return the component
  return <Divider style={{ backgroundColor: token.colorSecondary, height: 1, margin: 0 }} />;
}

export default ContactDividerHorizontal;
