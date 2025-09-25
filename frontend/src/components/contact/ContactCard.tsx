/** @format */

import { Flex, Divider, theme, Typography } from "antd";
import ContactText from "@/components/contact/ContactText";

const { Title } = Typography;
const { useToken } = theme;

function ContactCard() {
  // The antd token
  const { token } = useToken();

  return (
    <Flex vertical gap={5} align="center">
      {/* The title */}
      <Title level={3} style={{ margin: 0 }}>
        Simon Mariani
      </Title>

      <Divider style={{ backgroundColor: token.colorSecondary, height: 1, margin: 0 }} />

      <ContactText text="simon.mariani65@gmail.com" link="mailto:simon.mariani65@gmail.com" />
      <ContactText text="+31 6 375 552 91" link="tel:+31637555291" />

      <Divider style={{ backgroundColor: token.colorSecondary, height: 1, margin: 0 }} />

      <ContactText text="Linkedin" link="https://linkedin.com/in/simon-mariani65" openInNewTab={true} />
      <ContactText text="Github" link="https://github.com/SimonMariani" openInNewTab={true} />

      <Divider style={{ backgroundColor: token.colorSecondary, height: 1, margin: 0 }} />
      <ContactText
        text="Berlin, Germany"
        link="https://www.google.com/maps/place/Berlijn/@52.5069386,13.2599275,11z/data=!3m1!4b1!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
        openInNewTab={true}
      />
    </Flex>
  );
}

export default ContactCard;
