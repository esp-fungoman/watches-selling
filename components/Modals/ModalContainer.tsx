import { Modal, ModalProps } from "antd";
import { FC } from "react";

interface ModalContainerProps extends ModalProps {}

const ModalContainer: FC<ModalContainerProps> = ({ children, ...props }) => {
  return (
    <Modal destroyOnClose {...props}>
      {children}
    </Modal>
  );
};

export default ModalContainer;
