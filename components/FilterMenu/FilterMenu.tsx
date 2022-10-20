import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import Icon from "../Icon/Icon";

import styles from "./FilterMenu.module.scss";
import { height } from "@mui/system";

interface FilterMenuProps{
  brandItemArray?: any,
  priceItemArray?: any,
}

const FilterMenu = (props: FilterMenuProps) => {
  const { brandItemArray, priceItemArray } = props;

  const router = useRouter();

  const DropdownList = (props: any) => {
    const {title, placeholder, itemArray } = props;

    const [show, setShow] = useState(true);
    const [placeholderMenu, setPlaceholderMenu] = useState(placeholder);
    const [height, setHeight] = useState('fit-content');
    const ref = useRef<any>(null);

    useEffect(() => {
      setHeight(ref.current.clientHeight);
      setShow(false);
    }, [])
    

    return (
      <div className={styles.dropdown_menu}>
        <div className={styles.title} onClick={() => setShow(prev => !prev)}>
          <h5>{title}</h5>
          <Icon icon="thin-black-dropdown" size={16}/>
        </div>
        <p>{placeholderMenu}</p>
        <ul ref={ref} style={{height: show ? height: 0}} className={classNames(styles.list, !show ? styles.show: "")}>
          <li>
            <span>{placeholder}</span>
          </li>
          {Array.isArray(itemArray) && itemArray.map((item: any, index: any) => (
            <li key={index} onClick={() => router.push(item.link || "#")}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.left_side_wrapper}>
        <DropdownList 
          title="THƯƠNG HIỆU"
          placeholder="Chọn thương hiệu"
          itemArray={brandItemArray}
        />

        <DropdownList 
          title="GIÁ TIỀN"
          placeholder="Chọn giá tiền"
          itemArray={brandItemArray}
        />
      </div>
      
      <div className={styles.dropdown_menu}>
        <div className={styles.title}>
          <h5>SẮP XẾP</h5>
          <Icon icon="thin-black-dropdown" size={16}/>
        </div>
        <p>Mặc định</p>
      </div>
    </div>
  )
}

export default FilterMenu;