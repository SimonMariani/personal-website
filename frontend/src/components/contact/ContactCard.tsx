/** @format */

import { Fragment } from "react";
import { Flex, Typography } from "antd";
import { contactName, contactGroups } from "@/config/contact";
import ContactText from "@/components/contact/ContactText";
import ContactDivider from "@/components/contact/ContactDivider";

const { Title } = Typography;

type ContactCardProps = {
  /* The layout direction: vertical shows a titled card (used in the modal), horizontal a single row (used in the footer) */
  direction?: "horizontal" | "vertical";
};

function ContactCard({ direction = "vertical" }: ContactCardProps) {
  const isVertical = direction === "vertical";

  // The vertical card shows a title and groups the links between horizontal dividers
  if (isVertical) {
    return (
      <Flex vertical gap={5} align="center">
        {/* The title */}
        <Title level={3} style={{ margin: 0 }}>
          {contactName}
        </Title>

        {/* The contact information, grouped between horizontal dividers */}
        {contactGroups.map((group, groupIndex) => (
          <Fragment key={groupIndex}>
            <ContactDivider direction="horizontal" />
            {group.map((item) => (
              <ContactText key={item.text} text={item.text} link={item.link} openInNewTab={item.openInNewTab} />
            ))}
          </Fragment>
        ))}
      </Flex>
    );
  }

  // The horizontal card shows all links in a single row separated by vertical dividers
  const items = contactGroups.flat();
  return (
    <Flex gap={10} align="center">
      {items.map((item, index) => (
        <Fragment key={item.text}>
          {index > 0 && <ContactDivider direction="vertical" />}
          <ContactText text={item.text} link={item.link} openInNewTab={item.openInNewTab} />
        </Fragment>
      ))}
    </Flex>
  );
}

export default ContactCard;
