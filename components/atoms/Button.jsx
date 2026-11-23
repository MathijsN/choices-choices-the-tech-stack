import styles from "./Button.module.css";

export default function Button({ href, classes, content }) {
    return (
        <>
            <a href={href} className={classes}>{content}</a>
        </>
    )
}