/** @format */

import { Flex, Divider, theme } from "antd";
import ContactText from "@/components/contact/ContactText";

const { useToken } = theme;

function ContactCard() {
  // The antd token
  const { token } = useToken();

  return (
    <Flex vertical gap={10} align="start">
      {/* Divider for dividing the title from the texts */}
      <Divider style={{ backgroundColor: token.colorPrimary, height: 1, margin: 0 }} />

      <ContactText text="• simon.mariani65@gmail.com" />
      <ContactText text="• Linkedin" link="https://linkedin.com/in/simon-mariani65" />
      <ContactText text="• Github" link="https://github.com/SimonMariani" />
      <ContactText text="• Berlin, Germany" />
    </Flex>
  );
}

export default ContactCard;
