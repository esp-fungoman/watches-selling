import styles from './NotificationPopup.module.scss';
import Icon from "../Icon/Icon";
import Image from "next/image";

interface NotificationPopupProps {
    notilist?: any;
}

const NotificationPopup = (props: NotificationPopupProps) => {
    const { notilist } = props;

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <Icon icon="bell" size={24}/>
                </div>
                <p className={styles.text}>Thông báo</p>
            </div>
            <div className={styles.body}>
                {Array.isArray(notilist) && notilist.map((item) => (
                    <div className={styles.item} key={item.value}>
                        <div className={styles.img}>
                            <Image src={item.src} alt="image" layout = "fill"/>
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.text_title}>{item.title}</h1>
                            <p className={styles.text}>
                            Đơn hàng 
                                <span className={styles.text_title}>{item.code}</span>
                                {item.description}
                            </p>
                            <p className={styles.text_mini}>{item.date}</p>
                        </div>
                    </div>
                ))}   
            </div>
        </section>
    )
}

export default NotificationPopup;