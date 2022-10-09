import Link from "next/link";
import Icon from "../Icon/Icon";
import Image from "next/image";

import classNames from 'classnames';
import styles from "./Header.module.scss";

const header_items = {
  upper_bar: {
    title: 'FREESHIP cho đơn hàng từ 399k. Mua ngay!',
    status_items: [
      {
        value: 1,
        content: "Thông báo",
        icon: "header-notification"
      },
      {
        value: 2,
        content: "Theo dõi đơn hàng",
        icon: "header-delivery"
      },
      {
        value: 3,
        content: "032 583 9032",
        icon: "header-phone"
      }
    ]
  },
  lower_bar: {
    logo: {
      icon: "logo",
    },
    search_placeholder: "Tìm kiếm son, chăm sóc da mặt",
  }
}

const user = {
  name: "Nguyen Thao",
  rank: "Silver",
  coin: "342",
  icon: "header-user"
}

const categories = [
  {
    name: "Danh mục sản phẩm", 
    link: "#",
    item: [
      {test: "test"}
    ]
  },
  {
    name: "Sản phẩm mới",
    link: "#",
    item: []
  },
  {
    name: "Thương hiệu",
    link: "#",
    item: [
      {test: "test"}
    ]
  },
  {
    name: "Góc làm đẹp",
    link: "#",
    item: []
  },
  {
    name: "Quà tặng",
    link: "#",
    item: []
  },
  {
    name: "Cộng đồng",
    link: "#",
    item: []
  },
  {
    name: "Khuyến mãi",
    link: "#",
    item: []
  }
]

const Header = () => {
  return (
    <div>
      <div className={styles.upper_bar_wrapper}>
        <div className={classNames(styles.upper_bar, "container")}>
          <div className={styles.title}>{header_items.upper_bar.title}</div>
          <div className={styles.upper_bar_status_items}>
            {Array.isArray(header_items.upper_bar.status_items) &&
              header_items.upper_bar.status_items.map((item: any) => (
                <Link key={item.value} target="" href="/#">
                  <div className={styles.item}>
                    <Icon icon={item.icon} size={18} />
                    <div>{item.content}</div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      <div className={styles.lower_bar_wrapper}>
        <div className={classNames(styles.lower_bar, "container")}>
          <div className={styles.left_side_wrapper}>
            <Image src="/logo.svg" width={138} height={21} alt="logo"/>
            <div className={styles.search_bar}>
              <input type="text" placeholder={header_items.lower_bar.search_placeholder} />
              <div className={styles.icon_wrapper}>
                <Icon icon="header-search" size={24}/>
              </div>
            </div>
          </div>

          <div className={styles.right_side_wrapper}>
            <Icon icon="header-shopping-cart" size={32}/>
            <div className={styles.user_panel}>
              <Icon icon={user.icon} size={32} />
              <div>
                <div className={styles.user_name}>
                  <div>{user.name}</div>
                  <Icon icon="thin-black-dropdown" size={12}/>
                </div>
                <div>{user.rank} / {user.coin} coins</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navi_menu_wrapper}>
        <div className={classNames(styles.navi_menu, "container")}>
          {Array.isArray(categories) && categories.map((item: any, index: any) => (
            <div className={styles.navi_menu_button} key={index}>
              <div>{item.name}</div>
              {item.item.length !== 0 && (<Icon icon="thick-white-dropdown" size={16}/>)}
              {item.name == "Khuyến mãi" && (<Icon icon="flash-lightning" size={24}/>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;