import { CSSProperties } from "react";
import classNames from 'classnames';

import styles from './SectionLayout.module.scss'

export interface SectionLayoutProps {
  id?: string,
  title?: string,
  loading?: boolean,
  className?: string,
  titleContainerClassname?: string,
  childrenClassName?: string,
  children?: any,
  show?: boolean,
  backgroundImage?: string,
  containerClassname?: string,
  transparent?: boolean,
  rowClassname?: string,
  showAll?: boolean,
  style?: CSSProperties
}

const SectionLayout = (props: SectionLayoutProps) => {
  const {
    id,
    title,
    loading,
    className,
    titleContainerClassname,
    childrenClassName,
    children,
    show,
    backgroundImage,
    containerClassname,
    transparent,
    rowClassname,
    showAll,
    style
  } = props;

  const sectionLayoutClassnames = classNames(className, styles.section_layout, {
    [styles.transparent]: transparent
  });

  const titleContainerClassnames = classNames(styles.title_container, titleContainerClassname);

  const childrenClassNames = classNames(styles.children, childrenClassName);

  return !show ? null :
  (
    <div id={id} style={style} className={sectionLayoutClassnames}>
      <div style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {}} className={classNames(styles.container, containerClassname)}>
        {title && (
          <div className={classNames(styles.row, rowClassname)}>
            <div className={classNames(styles.title_wrapper ,titleContainerClassnames)}>
              <h1 className={styles.title}>{title}</h1>
              {showAll && (<h2 className={styles.show_all}>Xem tất cả</h2>)}
            </div>
            <div className={childrenClassNames}>
              {children}
            </div>
            {showAll && (<p className={styles.show_all_button}>Xem tất cả</p>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionLayout;