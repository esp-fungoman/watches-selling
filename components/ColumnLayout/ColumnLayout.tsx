import styles from './ColumnLayout.module.scss'
import Profile from '../Profile/Profile'


interface ColumnLayoutProps {
    children?: any;
    data?: any;
}
const ColumnLayout = (props: ColumnLayoutProps) => {
    const { children, data } = props;
    return (
        <section className={styles.wrapper}>
            <Profile data={data} className={styles.left_col}/>
            <div className={styles.right_col}>{children}</div>
        </section>
    )
}
export default ColumnLayout;