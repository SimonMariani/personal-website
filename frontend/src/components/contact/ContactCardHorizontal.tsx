/** @format */

import { Flex } from "antd";
import ContactText from "@/components/contact/ContactText";
import ContactDividerVertical from "@/components/contact/ContactDividerVertical";

function ContactCardHorizontal() {
  return (
    <Flex gap={10} align={"center"}>
      <ContactText text="simon.mariani65@gmail.com" link="mailto:simon.mariani65@gmail.com" />
      <ContactDividerVertical />
      <ContactText text="+31 6 375 552 91" link="tel:+31637555291" />
      <ContactDividerVertical />
      <ContactText text="Linkedin" link="https://linkedin.com/in/simon-mariani65" openInNewTab={true} />
      <ContactDividerVertical />
      <ContactText text="Github" link="https://github.com/SimonMariani" openInNewTab={true} />
      <ContactDividerVertical />
      <ContactText
        text="Berlin, Germany"
        link="https://www.google.com/maps/place/Berlijn/@52.5069386,13.2599275,11z/data=!3m1!4b1!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
        openInNewTab={true}
      />
    </Flex>
  );
}

export default ContactCardHorizontal;
