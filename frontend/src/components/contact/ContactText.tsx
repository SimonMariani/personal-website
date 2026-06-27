/** @format */

import { Typography } from "antd";

const { Text } = Typography;

type ContactTextProps = {
  text: string;
  link?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
};

function ContactText({ text, link, openInNewTab, onClick }: ContactTextProps) {
  return (
    <div>
      {link ? (
        <a href={link} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer">
          <Text style={{ margin: 0 }} type="secondary">
            {text}
          </Text>
        </a>
      ) : (
        <Text onClick={onClick} style={{ margin: 0, cursor: onClick ? "pointer" : "default" }} type="secondary">
          {text}
        </Text>
      )}
    </div>
  );
}

export default ContactText;
