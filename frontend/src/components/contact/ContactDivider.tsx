/** @format */

import { Divider, theme } from "antd";

const { useToken } = theme;

type ContactDividerProps = {
  /* The orientation of the divider */
  direction: "horizontal" | "vertical";
};

function ContactDivider({ direction }: ContactDividerProps) {
  // Get the theme token for styling
  const { token } = useToken();

  // Return the divider, the styling depends on the orientation
  if (direction === "vertical") {
    return <Divider type="vertical" style={{ backgroundColor: token.colorPrimary, height: 20 }} />;
  }
  return <Divider style={{ backgroundColor: token.colorSecondary, height: 1, margin: 0 }} />;
}

export default ContactDivider;
