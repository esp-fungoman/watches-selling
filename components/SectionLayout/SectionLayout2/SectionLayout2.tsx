import styles from "./SectionLayout2.module.scss"
import classNames from "classnames";
import Title from "../../../components/Title/Title";
import Notification from "../../../components/Notification/Notification";
interface SectionLayout2Props {
    title?: string;
    className?: any;
}

const SectionLayout2 = (props: SectionLayout2Props) => {
    const { title, className } = props;

    const categorylist = [
        {
            value: "Tất cả",
            content: "Tất cả",
        },
        {
            value: "Đơn hàng",
            content: "Đơn hàng",
        },
        {
            value: "Khuyến mãi",
            content: "Khuyến mãi",
        },
        {
            value: "Users",
            content: "Users",
        },
    ]

    const itemlist = [
        {
            src: require("/public/images/mini1.svg"),
            title: "Chia sẻ nhận xét về sản phẩm",
            description: "Đơn hàng #202453119 đã sẵn sàng để giao đến quý khách. Chúng tôi vừa bàn giao đơn hàng của quý khách đến đối tác vận chuyển Cherict Team. Đơn hàng sẽ được",
            date: "14/01/2021"
        },
        {
            src: require("/public/images/mini1.svg"),
            title: "Chia sẻ nhận xét về sản phẩm",
            description: "Đơn hàng #202453119 đã sẵn sàng để giao đến quý khách. Chúng tôi vừa bàn giao đơn hàng của quý khách đến đối tác vận chuyển Cherict Team. Đơn hàng sẽ được",
            date: "14/01/2021"
        }
    ]
    return (
        <section className={classNames(className,styles.section_layout_2_wrapper)}>
            <Title content={title}/>
            <Notification
                categorylist={categorylist}
                itemlist={itemlist}
            />
        </section>
    )
}

export default SectionLayout2;