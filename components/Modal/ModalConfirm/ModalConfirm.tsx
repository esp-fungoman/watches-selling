// ModalConfirm.tsx
import React from "react";
import Modal from "../Modal/Modal";
import Button from "../../Button/Button";

interface ModalProps {
  isVisible: boolean;
  title?: string;
  iconClose?: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  titleBody?: string;
  titleConfirm?: string;
  onOk?: () => Promise<void>;
}

const ModalConfirm = (props: ModalProps) => {
  const {
    isVisible,
    title = "Thông báo",
    iconClose = "Đóng",
    onClose,
    onOpen,
    titleBody,
    onOk,
    titleConfirm,
  } = props;

  const handleOk = async () => {
    if (onOk) await onOk();
    onClose && onClose();
  };

  const Footer = () => (
    <div className="flex justify-between w-full gap-3">
      <Button variant="primary" className="flex-1" onClick={onClose} >HỦY BỎ </Button>
      <Button
        // variant="danger"
        title={"XOÁ"}
        className="flex-1"
        onClick={handleOk}
      >
        XÓA</Button>
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
      </div>
    </Modal>
  );
};

export default ModalConfirm;
