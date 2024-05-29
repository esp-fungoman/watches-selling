import AccountEditInfo from "../../components/AccountEditInfo/AccountEditInfo";
import ColumnLayout from "../../components/ColumnLayout/ColumnLayout";
import AccountAddress from "../../components/AccountAddress/Login/AccountAddress";
import AccountAddressNotLogin from "../../components/AccountAddress/NotLogin/AccountAddressNotLogin";
import AccountChangPassword from "../../components/AccountChangePassword/AccountChangePassword";
import { useEffect, useState } from "react";
import { UserApi } from "../../services/user";

const AccountPage = () => {
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
      {profile && 
      <ColumnLayout data={profile}>
        <AccountEditInfo personalInfo={profile} className="min-w-[500px]"/>
      </ColumnLayout>}
    </section>
  );
};

export default AccountPage;
