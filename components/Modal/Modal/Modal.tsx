import React, { Children } from "react";
import { ReactNode } from "react";
import styles from "./Modal.module.css";
import { Button, Modal as ModalAntd } from "antd";

interface ModalProps {
  title?: string;
  titleOpen?: string;
  titleClose?: string;
  isVisible?: boolean;
  isCenterModal?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
  width?: number | string;
  iconClose?: ReactNode;
  footer?: ReactNode;
}

const Modal = (props: ModalProps) => {
  const {
    title,
    titleOpen,
    titleClose,
    className,
    isVisible,
    isCenterModal = false,
    onOpen,
    onClose,
    children,
    width,
    iconClose,
    footer,
    ...rest
  } = props;

  return (
    <ModalAntd
      closeIcon={iconClose}
      width={width}
      className={className}
      title={title}
      okText={titleOpen}
      cancelText={titleClose}
      centered={isCenterModal}
      open={isVisible}
      onOk={onOpen}
      onCancel={onClose}
      footer={footer}
    >
      {children}
    </ModalAntd>
  );
};

export default Modal;
