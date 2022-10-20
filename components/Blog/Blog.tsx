import styles from  './Blog.module.scss'
import Image from 'next/image'
import classNames from 'classnames'
interface BlogProps {
    variant?: "banner1" | "banner2";
    src?: string;
    title?: string;
    category?: string;
    className?: string;
}

const Blog = (props: BlogProps) => {
    const { variant, title, category, src, className} = props;

    return (
        <section className={classNames(className, styles.wrapper, {
                [styles.banner1] : variant === "banner1",
                [styles.banner2] : variant === "banner2",
                }
            )
        }>
            <div className={styles.thumbnail}>
                <Image src={src} alt="thumbnail"/>
            </div>
            <p className={styles.category}>{category}</p>
            <p className={styles.title}>{title}</p>
        </section>
    )
}

export default Blog;