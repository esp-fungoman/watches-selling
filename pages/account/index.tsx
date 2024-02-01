import AccountEditInfo from '../../components/AccountEditInfo/AccountEditInfo';
import ColumnLayout from '../../components/ColumnLayout/ColumnLayout';
import AccountAddress from '../../components/AccountAddress/Login/AccountAddress';
import AccountAddressNotLogin from '../../components/AccountAddress/NotLogin/AccountAddressNotLogin';
import AccountChangPassword from '../../components/AccountChangePassword/AccountChangePassword';

const EditInfo = () => {
  const data = {
    email: 'a@gmail.com',
    img: '',
    name: 'asdasd',
    phone: '12312asdasd',
    gender: {
      label: 'male',
      value: 'male',
    },
    date: '12323',
  };

  const addressData = [
    {
      id: '1',
      name: 'Le Thao Nguyen',
      phone: '033 768 8743',
      address: '173 Nguyễn Văn Trỗi, P. 11, Quận Phú Nhuận',
    },
  ];

  return (
    <section id="account-edit-info">
      <ColumnLayout>
        {/* <AccountEditInfo personalInfo={data} /> */}
        {/* <AccountAddress address={addressData} /> */}
        {/* <AccountAddressNotLogin/> */}
        <AccountChangPassword />
      </ColumnLayout>
    </section>
  );
};

export default EditInfo;
