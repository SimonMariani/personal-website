/** @format */

import { Flex } from "antd";
import ContactText from "@/components/contact/ContactText";
import ContactDividerVertical from "@/components/contact/ContactDividerVertical";

function ContactCardHorizontal() {
  return (
    <Flex gap={10} align={"center"}>
      <ContactText text="simon.mariani65@gmail.com" />
      <ContactDividerVertical />
      <ContactText text="Linkedin" link="https://linkedin.com/in/simon-mariani65" />
      <ContactDividerVertical />
      <ContactText text="Github" link="https://github.com/SimonMariani" />
      <ContactDividerVertical />
      <ContactText text="Berlin, Germany" />
    </Flex>
  );
}

export default ContactCardHorizontal;
