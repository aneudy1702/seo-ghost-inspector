// Modal.stories.tsx
import React from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true
};
