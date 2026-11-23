import styles from "./Sectiontitle.module.css";

export default function Sectiontitle({ subtitle, h2, p }) {
    return (
        <>
            <span>{subtitle}</span>
            <h2>{h2}</h2>
            <p>{p}</p>
        </>
    )
}