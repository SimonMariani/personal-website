/** @format */

import { useState } from "react";
import { Alert, Button, Form, Input, Modal, Typography, theme } from "antd";
import { useForm } from "@formspree/react";
import { formSpreeId } from "@/config/config";

const { useToken } = theme;
const { Title, Text } = Typography;

function ContactFormModal() {
  // The style tokens from the theme
  const { token } = useToken();

  // The modal state and the form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm(formSpreeId);

  // Handle the modal close
  const handleCancel = () => {
    setIsModalOpen(false);
    if (state.succeeded) reset();
  };

  return (
    <>
      {/* The button to open the modal */}
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Contact me
      </Button>

      {/* The actual modal */}
      <Modal closable={false} open={isModalOpen} onCancel={handleCancel} footer={null}>
        {state.succeeded ? (
          // The success message after the form is submitted
          <div style={{ textAlign: "center" }}>
            {/* The success message title and text */}
            <Title level={4} style={{ marginTop: 0 }}>
              Message sent!
            </Title>
            <Text type="secondary" style={{ display: "block", marginBottom: 14 }}>
              Thank you for reaching out! I'll get back to you soon.
            </Text>

            {/* The button to close the modal */}
            <Button type="primary" onClick={handleCancel}>
              Close
            </Button>
          </div>
        ) : (
          // The form to send a message
          <>
            {/* The form title */}
            <Title level={4} style={{ marginTop: 0 }}>
              Send a message
            </Title>

            {/* The actual form that submits the message */}
            <Form layout="vertical" onFinish={handleSubmit}>
              {/* The form input fields */}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input name="email" placeholder="your@email.com" style={{ color: token.colorTextAlternative }} />
              </Form.Item>
              <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter a message" }]}>
                <Input.TextArea name="message" rows={4} placeholder="Your message..." style={{ color: token.colorTextAlternative }} />
              </Form.Item>

              {/* If there are errors show an error message unless the form is submitting */}
              {(state.errors?.getFormErrors().length ?? 0) > 0 && !state.submitting && (
                <Form.Item>
                  <Alert type="error" message="Something went wrong. Please try again." showIcon style={{ color: token.colorTextAlternative }} />
                </Form.Item>
              )}

              {/* The submit button */}
              <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit" loading={state.submitting} block>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
}

export default ContactFormModal;
