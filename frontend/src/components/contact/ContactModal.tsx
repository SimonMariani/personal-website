/** @format */

import { useState } from "react";
import { Button, Modal } from "antd";
import ContactCard from "@/components/contact/ContactCard";

function ContactModal() {
  // The modal open state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // The modal component
  return (
    <>
      <Button onClick={showModal} color="default" variant="text">
        Contact
      </Button>

      <Modal closable={false} open={isModalOpen} onCancel={handleCancel} footer={null}>
        <ContactCard />
      </Modal>
    </>
  );
}

export default ContactModal;
