import { useState, useEffect } from "react";
import AccountEditInfo from "../../../components/AccountEditInfo/AccountEditInfo";
import ColumnLayout from "../../../components/ColumnLayout/ColumnLayout";
import { UserApi } from "../../../services/user";
import AccountChangPassword from "../../../components/AccountChangePassword/AccountChangePassword";

const ChangePasswordPage = () => {
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    const getProfile = async () => {
      const data = await UserApi.getProfile();
      if (data) {
        setProfile(data);
      }
    };
    getProfile();
  }, []);
  return (
    <section id="account-edit-info">
      {profile && (
        <ColumnLayout data={profile}>
          <AccountChangPassword />
        </ColumnLayout>
      )}
    </section>
  );
};

export default ChangePasswordPage;
