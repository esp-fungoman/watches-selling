import styles from "./Footer.module.scss";
import Image from "next/image";
import Icon from "../Icon/Icon";
import { Router, useRouter } from "next/router";
import classNames from "classnames";

const footer_logo_items = [
  {
    icon: "footer-delivery",
    content: "Giao hàng miễn phí trong nội thành",
  },
  {
    icon: "footer-authentic",
    content: "100% sản phẩm chính hãng",
  },
  {
    icon: "footer-return",
    content: "Hoàn trả trong 7 ngày",
  },
];

const footer_items = {
  hotline: "+84 475 5830",
  column1: {
    title: "Danh mục sản phẩm",
    items: [
      {
        content: "Beauty Box",
        link: "#",
      },
      {
        content: "Beauty Box",
        link: "#",
      },
      {
        content: "Beauty Box",
        link: "#",
      },
      {
        content: "Beauty Box",
        link: "#",
      },
      {
        content: "Beauty Box",
        link: "#",
      },
      {
        content: "Beauty Box",
        link: "#",
      },
    ],
  },
  column2: {
    title: "Thông tin & Hướng dẫn",
    items: [
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
      {
        content: "Về CheriCT",
        link: "#",
      },
    ],
  },
  column3: {
    title: "Săn thưởng cùng với CheriCT Members",
    member_card: [
      {
        link: "/assets/footer/gold_member.png",
      },
      {
        link: "/assets/footer/gold_member.png",
      },
      {
        link: "/assets/footer/gold_member.png",
      },
    ],
    button: {
      content: "Tìm hiểu thêm",
      link: "#",
    },
  },
  column4: {
    content: "",
    social_button: [
      {
        icon: "twitter-grey",
        link: "#",
      },
      {
        icon: "facebook-grey",
        link: "#",
      },
      {
        icon: "instagram-grey",
        link: "#",
      },
      {
        icon: "youtube-grey",
        link: "#",
      },
    ],
  },
};

const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.upper_section}>
          <div className={styles.icon_items}>
            {footer_logo_items.map((item: any, index: any) => (
              <div className={styles.item} key={index}>
                <Icon icon={item.icon} size={50} />
                <div className={styles.content}>{item.content}</div>
              </div>
            ))}
          </div>
          <div className={styles.logo_items}>
            <Image src="/white-logo.svg" width={294} height={44} alt="logo" />
            <div>Hotline: {footer_items.hotline}</div>
          </div>
        </div>

        {/* <div className={styles.lower_section}>
          <div className={styles.sm_column_group}>
            <div className={styles.sm_column}>
              <div className={styles.title}>{footer_items.column1.title}</div>
              <div className={styles.list_item}>
                {footer_items.column1.items.map((item: any, index: any) => (
                  <div key={index} onClick={() => router.push('#')}>
                    {item.content}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sm_column}>
              <div className={styles.title}>{footer_items.column2.title}</div>
              <div className={styles.list_item}>
                {footer_items.column2.items.map((item: any, index: any) => (
                  <div  key={index} onClick={() => router.push('#')}>
                    {item.content}
                  </div>
                ))}
              </div>
            </div>

            <div className={classNames(styles.sm_column, styles.member_column)}>
              <div className={styles.title}>{footer_items.column3.title}</div>
              <div className={styles.member_cards}>
                {footer_items.column3.member_card.map((item: any, index: any) => (
                  <div className={classNames(styles.card, styles[`card_${index}`])} key={index}>
                    <Image src={item.link} width={92} height={57} layout="responsive" alt="a"/>
                  </div>
                ))}
              </div>
              <div className={styles.button} onClick={() => router.push(footer_items.column3.button.link)}>
                {footer_items.column3.button.content}
              </div>
            </div>
          </div>
          
          <div className={styles.lg_column}>
            <div>{footer_items.column4.content}</div>
            <div className={styles.social_buttons}>
              {footer_items.column4.social_button.map((item: any, index: any) => (
                <div className={styles.button} key={index} onClick={() => router.push(item.link)}>
                  <Icon icon={item.icon} size={24}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.social_button_section}>
          <div className={styles.social_buttons}>
              {footer_items.column4.social_button.map((item: any, index: any) => (
                <div className={styles.button} key={index} onClick={() => router.push(item.link)}>
                  <Icon icon={item.icon} size={24}/>
                </div>
              ))}
          </div>

          <div>
            <Image src="/assets/footer/license.png" width={100} height={35} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
