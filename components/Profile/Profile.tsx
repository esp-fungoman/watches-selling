import AccountProfile from "../AccountProfile/AccountProfile";
import { useEffect, useState } from "react";
import MenuProfile from "../MenuProfile/MenuProfile";
import styles from "./Profile.module.scss";
import classNames from "classnames";
import { InvoiceApi } from "../../services/invoice";
import { Icon } from "../Icon";
import Link from "next/link";
interface ProfileProps {
  className?: any;
  data?: any;
}

const Profile = (props: ProfileProps) => {
  const { className, data } = props;
  const [invoiceList, setInvoiceList] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    if (data) {
      setProfile(data); // Update data when data changes
    }
    InvoiceApi.list().then((res: any) => {
      if (res) {
        setInvoiceList(res);
      }
    });
  }, [data]);
  return (
    <section className={classNames(styles.wrapper, className)}>
      <AccountProfile
        src={require("/public/images/avatar.svg")}
        name={profile?.firstName + " " + profile?.lastName}
        money={152}
        remain={0}
      />
      <div className={styles.invoice_wrapper}>
        <div className="font-semibold text-2xl">Danh sách hóa đơn</div>
        <div className="flex flex-col gap-2 justify-start items-start w-full">
          {invoiceList.length > 0 &&
            invoiceList.map((invoice) => (
              <div className="flex items-start justify-start gap-1">
                <Icon name="document-normal" size={16} className="mt-[3.5px]"/>
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}/invoice/${invoice.id}`}
                  className={styles.item}
                >
                  {invoice.id}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
