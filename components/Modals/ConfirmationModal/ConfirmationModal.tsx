import Button from "@/components/Button";
import { UserAtom } from "@/services/user";
import { message } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import { useResetRecoilState } from "recoil";
import ModalContainer from "../ModalContainer";

interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  open,
  handleClose,
}) => {
  const resetUser = useResetRecoilState(UserAtom.currentUser);

  const handleSignOut = () => {
    localStorage.clear();
    resetUser();
    message.success("Sign out successfully!");
    handleClose();
  };

  return (
    <ModalContainer centered open={open} onCancel={handleClose} footer={null}>
      <div className="flex flex-col gap-3 my-6">
        <p className="text-xl text-center font-semibold">
          Are you sure you want to sign out?
        </p>
        <div className="flex gap-6 items-center mt-6">
          <Button type="outlined" className="flex-1" onClick={handleSignOut}>
            Sign out
          </Button>
          <Button variant="danger" className="flex-1" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmationModal;
