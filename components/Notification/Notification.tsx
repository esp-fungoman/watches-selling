import styles from "./Notification.module.scss";
import Image from "next/image"
interface NotificationProps {
    categorylist?: any;
    itemlist?: any;
}

const Notification = (props: NotificationProps) => {
    const {
        categorylist,
        itemlist
    } = props;

    return (
        <section className={styles.notification_wrapper}>
            <div className={styles.category_wrapper}>
               <div className={styles.category_list}>
                {Array.isArray(categorylist) && categorylist.map((category: any) => (
                    <div key={category.value} className={styles.category}>{category.content}</div>
                ))}
               </div>
               <p className={styles.text}>Đánh dấu đã đọc tất cả</p>
            </div>
            <span className={styles.break}></span>
            <div className={styles.item_list}>
                {Array.isArray(itemlist) && itemlist.map((item: any) => (
                    <div key={item.value} className={styles.item_wrapper}>
                        <div className={styles.left}>
                            <div className={styles.img}>
                             <Image src={item.src} alt ="image"/>
                            </div>
                            <div className={styles.content}>
                                <p className={styles.title}>   
                                    {item.title}
                                </p>
                                <p className={styles.text}>
                                    {item.description}
                                </p>
                                <p className={styles.text_mini}>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.blue}>Xem chi tiết</p>
                            <p className={styles.red}>Xóa</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Notification;