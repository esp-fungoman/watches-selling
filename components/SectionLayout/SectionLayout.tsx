import styles from './SectionLayout.module.scss'
import Profile from '../Profile/Profile'


interface SectionLayoutProps {
    children?: any;
}
const SectionLayout = (props: SectionLayoutProps) => {
    const { children } = props;
    return (
        <section className={styles.wrapper}>
            <Profile className={styles.left_col}/>
            <div className={styles.right_col}>{children}</div>
        </section>
    )
}
export default SectionLayout;