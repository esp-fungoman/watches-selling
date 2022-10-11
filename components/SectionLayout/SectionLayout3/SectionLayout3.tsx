import styles from './SectionLayout3.module.scss'
import SectionLayout1 from '../SectionLayout1/SectionLayout1'
import SectionLayout2 from '../SectionLayout2/SectionLayout2'

interface SectionLayout3Props {
    children?: any;
}
const SectionLayout3 = (props: SectionLayout3Props) => {
    const { children } = props;
    return (
        <section className={styles.wrapper}>
            <SectionLayout1 className={styles.left_col}/>
            <SectionLayout2 title="Thông báo của tôi" className={styles.right_col}/>
        </section>
    )
}
export default SectionLayout3;