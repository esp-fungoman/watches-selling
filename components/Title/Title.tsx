import styles from "./Title.module.scss"

interface TitleProps {
    content?: string;
}

const Title = (props: TitleProps) => {
    const { content } = props;

    return (
        <h1 className={styles.title}>
            {content}
        </h1>
    )
}

export default Title;