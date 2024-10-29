import { Tabs } from "antd";
import { FC } from "react";
import SignInForm from "../../Auth/SignInForm";
import SignUpForm from "../../Auth/SignUpForm";
import ModalContainer from "../ModalContainer";

interface AuthModalProps {
  activeTab?: "sign-in" | "sign-up";
  open: boolean;
  onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = ({ activeTab, open, onClose }) => {
  const items = [
    {
      key: "sign-in",
      label: "Đăng nhập",
      children: <SignInForm onCancel={onClose} />,
    },
    {
      key: "sign-up",
      label: "Đăng ký",
      children: <SignUpForm onCancel={onClose} />,
    },
  ];

  return (
    <ModalContainer open={open} onCancel={onClose} footer={null}>
      <Tabs items={items} defaultActiveKey={activeTab} />
    </ModalContainer>
  );
};

export default AuthModal;
