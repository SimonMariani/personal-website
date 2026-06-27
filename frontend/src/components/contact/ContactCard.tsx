/** @format */

import { Flex, Typography } from "antd";
import ContactText from "@/components/contact/ContactText";
import ContactDividerHorizontal from "@/components/contact/ContactDividerHorizontal";
import ContactFormModal from "@/components/contact/ContactFormModal";

const { Title } = Typography;

function ContactCard() {
  return (
    <Flex vertical gap={5} align="center">
      {/* The title */}
      <Title level={3} style={{ margin: 0 }}>
        Simon Mariani
      </Title>

      {/* The contact information */}
      <ContactDividerHorizontal />
      <ContactText text="simon.mariani65@gmail.com" link="mailto:simon.mariani65@gmail.com" />
      <ContactDividerHorizontal />
      <ContactText text="Linkedin" link="https://linkedin.com/in/simon-mariani65" openInNewTab={true} />
      <ContactText text="Github" link="https://github.com/SimonMariani" openInNewTab={true} />
      <ContactDividerHorizontal />
      <ContactText
        text="Berlin, Germany"
        link="https://www.google.com/maps/place/Berlijn/@52.5069386,13.2599275,11z/data=!3m1!4b1!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
        openInNewTab={true}
      />
      <ContactDividerHorizontal />
      <ContactFormModal />
    </Flex>
  );
}

export default ContactCard;
