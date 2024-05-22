import React, { Children } from "react";
import { ReactNode } from "react";

import Modal from "../Modal/Modal";
import Button from "../../Button/Button";

import styles from "./Modal.module.css";

interface ModalProps {
  isVisible: boolean;
  title?: string;
  iconClose?: ReactNode;
  onClose?: (event?: any) => void;
  onOpen?: (event?: any) => void;
  content?: string | ReactNode;
  titleBody?: string;
}

const ModalNotice = (props: ModalProps) => {
  const {
    isVisible,
    title = "Thông báo",
    iconClose = "Đóng",
    onClose,
    onOpen,
    content,
    titleBody,
  } = props;

  const Footer = () => (
    <div className="flex justify-center">
      <Button variant="secondary" text="XÁC NHẬN" width="48%" onClick={onClose} />
    </div>
  );

  return (
    <Modal
      isCenterModal
      title={title}
      isVisible={isVisible}
      onClose={onClose}
      onOpen={onOpen}
      iconClose={iconClose}
      footer={<Footer />}
    >
      <div className="text-center mb-[24px]">
        <div className="text-big font-bold mb-[12px]">{titleBody}</div>
        <div>{content}</div>
      </div>
    </Modal>
  );
};

export default ModalNotice;
