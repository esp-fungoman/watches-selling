import AccountProfile from "../../components/AccountProfile/AccountProfile";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import SectionLayout1 from "../../components/SectionLayout/SectionLayout1/SectionLayout1";
import SectionLayout3 from "../../components/SectionLayout/SectionLayout3/SectionLayout3";

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
        {/* <SectionLayout1></SectionLayout1> */}
        <SectionLayout3/>
        </>
    )
}

export default Notification;