import AccountProfile from "../../components/AccountProfile/AccountProfile";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import NotificationPopup from "../../components/NotificationPopup/NotificationPopup";

const accountList = [
    {  
        value: "Đơn mua hàng",
        icon: "order",
        content: "Đơn mua hàng"
    },
]

const itemlist = [
    {
        src: require("/public/images/mini1.svg"),
        title: "Đơn hàng đặt hàng thành công",
        code: "20193HUVERG",
        description: "đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 16-01-2021 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm",
        date: "1 ngày trước"
    },
    {
        src: require("/public/images/mini1.svg"),
        title: "Chia sẻ nhận xét về sản phẩm",
        code: "20193HUVERG",
        description: "đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 16-01-2021 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm",
        date: "1 ngày trước"
    }
]

const Notification = () => {

    return (
        <>
        <NotificationPopup notilist={itemlist}></NotificationPopup>
        {/* <SectionLayout >
            <NotificationBox></NotificationBox>
        </SectionLayout> */}
        </>
    )
}

export default Notification;