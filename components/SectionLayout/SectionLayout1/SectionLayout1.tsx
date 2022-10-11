import AccountProfile from "../../../components/AccountProfile/AccountProfile";
import MenuProfile from "../../../components/MenuProfile/MenuProfile";
import styles from "./SectionLayout1.module.scss";
import classNames from "classnames";
interface SectionLayout1Props {
    className?: any;
}

const profile = [
    {  
        value: "Bài viết của tôi",
        icon: "ticket",
        content: "Bài viết của tôi",
        link: "#"
    },
    {
        value: "Chỉnh sửa thông tin",
        icon: "edit",
        content: "Chỉnh sửa thông tin",
        link: "#" 
    },
    {
        value: "Thông tin giao hàng",
        icon: "paper",
        content: "Thông tin giao hàng",
        link: "#" 
    },
    {
        value: "Đổi mật khẩu",
        icon: "lock",
        content: "Đổi mật khẩu",
        link: "#" 
    }
]

const product = [
    {
        value: "Sản phẩm đã xem",
        icon: "show",
        content: "Sản phẩm đã xem"
    },
    {
        value: "Sản phẩm yêu thích",
        icon: "heart",
        content: "Sản phẩm yêu thích"
    },
    {
        value: "Sản phẩm đánh giá",
        icon: "message",
        content: "Sản phẩm đánh giá"
    },
    {
        value: "Chờ hàng về",
        icon: "waiting",
        content: "Chờ hàng về"
    },
]

const info = [
    {
        value: "Chương trình Cheripoints",
        icon: "coin",
        content: "Chương trình Cheripoints"
    },
    {
        value: "Lịch sử Cheripoint",
        icon: "history",
        content: "Lịch sử Cheripoint"
    },
    {
        value: "Giới thiệu bạn bè",
        icon: "user",
        content: "Giới thiệu bạn bè"
    },
    {
        value: "Thông tin CheriCT",
        icon: "info",
        content: "Thông tin CheriCT"
    },
    {
        value: "Gửi yêu cầu hỗ trợ",
        icon: "question",
        content: "Gửi yêu cầu hỗ trợ"
    },
]

const SectionLayout1 = (props: SectionLayout1Props) => {
    const { className } = props
    return (
        <section className={classNames(styles.wrapper, className)}>
            <AccountProfile
                src= {require("/public/images/avatar.svg")}
                name= "Lê Thảo Nguyên"
                money= {152}
                remain= {0}
            />
            <MenuProfile 
                icon="order" 
                content="Đơn mua hàng" 
                show={false}
            />
            <MenuProfile 
                icon="profile" 
                content="Tài khoản" 
                show={true} list={profile} 
            />
            <MenuProfile 
                icon="product" 
                content="Sản phẩm" 
                show={true} list={product} 
            />
            <MenuProfile 
                icon="profile" 
                content="Thông tin" 
                show={true} list={info} 
            />
        </section>
    )
}

export default SectionLayout1;