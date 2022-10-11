import AccountProfile from "../../components/AccountProfile/AccountProfile";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import SectionLayout from "../../components/SectionLayout/SectionLayout";

const accountList = [
    {  
        value: "Đơn mua hàng",
        icon: "order",
        content: "Đơn mua hàng"
    },
]

const Notification = () => {

    return (
        <>
        <SectionLayout >
            <NotificationBox></NotificationBox>
        </SectionLayout>
        </>
    )
}

export default Notification;