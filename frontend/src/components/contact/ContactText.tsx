/** @format */

import { Typography } from "antd";

const { Text } = Typography;

type ContactTextProps = {
  text: string;
  link?: string;
};

function ContactText({ text, link }: ContactTextProps) {
  return (
    <div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
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
