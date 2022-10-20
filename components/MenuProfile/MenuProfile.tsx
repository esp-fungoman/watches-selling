import styles from './MenuProfile.module.scss'
import Link from "next/link";
import Icon from "../Icon/Icon";
// import SlideToggle from  "react-slide-toggle"
import { useState } from 'react'

const SlideToggle = require('react-slide-toggle')
interface MenuProfileProps {
    link?: string;
    content?: string;
    show?: boolean;
    list?: any;
    icon?: any;
    collapsed?: boolean;
    duration?: number;
}

const MenuProfile = (props: MenuProfileProps) => {
    const {
        link,
        content,
        list,
        show,
        icon,
        duration,
        collapsed,
    } = props;

    return (

    <SlideToggle
        duration={duration || 1000}
        collapsed = {true}
        render={({
            toggle,
            setCollapsibleElement,
        }: any) => (
            <section className={styles.menu_profile_wrapper}>
            <div className={styles.header_wrapper} onClick={toggle}>
                <div className={styles.header} >
                    <Icon icon={icon} size={24} className={styles.icon} />
                    <div className={styles.text}>{content}</div>
                </div>
                {show && <Icon icon="thin-black-dropdown" size={24} color="yellow"/>}
            </div>
            <div className={styles.body} ref={setCollapsibleElement}>
            {show && Array.isArray(list) && list.map((item: any) => (
                <div key={item.value} className={styles.item}>
                    <Icon icon={item.icon} size={24} className={styles.icon}/>
                    <div className={styles.text}>{item.content}</div>
                </div>
            ))} 
            </div>
            </section>
        )}
    ></SlideToggle>
        // </section>
    )
}

export default MenuProfile;