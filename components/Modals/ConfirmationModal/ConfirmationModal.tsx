import { message } from "antd";
import { useRouter } from "next/router";
import { FC } from "react";
import { useResetRecoilState } from "recoil";
import { UserAtom } from "../../../services/user";
import Button from "../../Button";
import ModalContainer from "../ModalContainer";

interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  open,
  handleClose,
}) => {
  const router = useRouter();
  const resetUser = useResetRecoilState(UserAtom.currentUser);

  const handleSignOut = () => {
    localStorage.clear();
    resetUser();
    message.success("Đăng xuất thành công!");
    handleClose();
    router.push("/");
  };

  return (
    <ModalContainer centered open={open} onCancel={handleClose} footer={null}>
      <div className="flex flex-col gap-3 my-6">
        <p className="text-xl text-center font-semibold">Xác nhận đăng xuất?</p>
        <div className="flex gap-6 items-center mt-6">
          <Button className="flex-1" onClick={handleSignOut}>
            Đăng xuất
          </Button>
          <Button type="outlined" className="flex-1" onClick={handleClose}>
            Huỷ{" "}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmationModal;
