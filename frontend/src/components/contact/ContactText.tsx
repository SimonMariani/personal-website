/** @format */

import { Typography } from "antd";

const { Text } = Typography;

type ContactTextProps = {
  text: string;
  link?: string;
  openInNewTab?: boolean;
};

function ContactText({ text, link, openInNewTab }: ContactTextProps) {
  return (
    <div>
      {link ? (
        <a href={link} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer">
          <Text style={{ margin: 0 }} type="secondary">
            {text}
          </Text>
        </a>
      ) : (
        <Text style={{ margin: 0 }} type="secondary">
          {text}
        </Text>
      )}
    </div>
  );
}

export default ContactText;
