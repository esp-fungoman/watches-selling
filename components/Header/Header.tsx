import Link from "next/link";
import Icon from "../Icon/Icon";
import Image from "next/image";
import { useRouter } from "next/router";

import classNames from "classnames";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import AuthModal from "../Modals/AuthModal";
import { useRecoilState } from "recoil";
import Button from "../Button";
import { UserApi, UserAtom } from "../../services/user";
import { Avatar, Popover } from "antd";
import ConfirmationModal from "../Modals/ConfirmationModal";
import Search from "../Search/Search";

const header_items = {
  
  lower_bar: {
    logo: {
      icon: "logo",
    },
    search_placeholder: "Tìm kiếm son, chăm sóc da mặt",
  },
};

const user = {
  name: "Nguyen Thao",
  rank: "Silver",
  coin: "342",
  icon: "header-user",
};

const categories = [
  {
    name: "Danh mục sản phẩm",
    link: "#",
    item: [{ test: "test" }],
  },
  {
    name: "Sản phẩm mới",
    link: "#",
    item: [],
  },
  {
    name: "Thương hiệu",
    link: "#",
    item: [{ test: "test" }],
  },
  {
    name: "Góc làm đẹp",
    link: "#",
    item: [],
  },
  {
    name: "Quà tặng",
    link: "#",
    item: [],
  },
  {
    name: "Cộng đồng",
    link: "#",
    item: [],
  },
  {
    name: "Khuyến mãi",
    link: "#",
    item: [],
  },
];

const Header = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(UserAtom.currentUser);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [authModal, setAuthModal] = useState<{
    open: boolean;
    activeTab?: "sign-in" | "sign-up";
  }>({ open: false, activeTab: "sign-in" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      UserApi.getMe()
        .then((res) => {
          if (res) {
            console.log("res", res);
            setCurrentUser(res);
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          setAuthModal({ open: true });
        });
    }
  }, [authModal.open]);
  return (
    <div>
      <div className={styles.lower_bar_wrapper}>
        <div className={classNames(styles.lower_bar, "container")}>
          <div className={styles.left_side_wrapper}>
            <Link href="/" className="cursor-pointer">
              <Image src="/logo.svg" width={138} height={21} alt="logo" />
            </Link>
            <div className={styles.search_bar}>
              {/* <input
                type="text"
                placeholder={header_items.lower_bar.search_placeholder}
              /> */}
              {/* <div className={styles.icon_wrapper}>
                <Icon name="header-search" size={24} />
              </div> */}
            </div>
          </div>

          <div className={styles.right_side_wrapper}>
            <Search className="w-full" />
            <div className={styles.mobile_search_icon}>
              <Icon name="black-search-icon" size={24} />
            </div>
            <Icon name="header-shopping-cart" size={32} />
            <div className={styles.user_panel}>
              {/* <Icon name={user.icon} size={32} /> */}
              <div>
                {currentUser ? (
                  <Popover
                    arrow={false}
                    className="cursor-pointer"
                    content={
                      <div className="flex flex-col gap-4">
                        <Button
                          type="outlined"
                          variant="danger"
                          className="gap-1 w-[100px]"
                          onClick={() => setOpenSignOut(true)}
                        >
                          Sign out <Icon name="logout" size={24} />
                        </Button>
                        <Button
                          type="outlined"
                          variant="danger"
                          className="gap-1 !w-[120px]"
                          onClick={() => router.push("/account")}
                        >
                          Profile <Icon name="logout" />
                        </Button>
                      </div>
                    }
                  >
                    <div className="bg-gray-400 rounded-4 w-max py-2 px-3">
                      {currentUser.lastName}
                    </div>
                    {/* <Avatar
                      className="hidden lg:block cursor-pointer"
                      src={currentUser.avatar_url}
                    >
                      {currentUser.username?.slice(0, 1)}
                    </Avatar> */}
                  </Popover>
                ) : (
                  <>
                    <div className="hidden lg:flex gap-3">
                      <Button
                        type="text"
                        onClick={() =>
                          setAuthModal({ open: true, activeTab: "sign-up" })
                        }
                      >
                        Sign Up
                      </Button>
                      <Button
                        onClick={() =>
                          setAuthModal({ open: true, activeTab: "sign-in" })
                        }
                      >
                        Sign In
                      </Button>
                    </div>
                  </>
                )}
              </div>
              <Link href="/cart">
                <Icon
                  className="cursor-pointer"
                  name="shopping-cart"
                  size={24}
                />
              </Link>
            </div>
            <div className={styles.mobile_button}>
              <Icon name="mobile-menu-button" size={24} />
            </div>
          </div>
        </div>
      </div>
      <AuthModal
        activeTab={authModal.activeTab}
        open={authModal.open}
        onClose={() => setAuthModal({ ...authModal, open: false })}
      />

      <ConfirmationModal
        open={openSignOut}
        handleClose={() => setOpenSignOut(false)}
      />
    </div>
  );
};

export default Header;
