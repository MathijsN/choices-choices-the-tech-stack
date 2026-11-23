import styles from "./Why.module.css";
import Sectiontitle from "../atoms/Sectiontitle";

export default function Why({ title, subtitle, reasons = [] }) {
    const reason = reasons.map(reason =>
        <>
            <dt>{reason.title}</dt>
            <dd>{reason.description}</dd>
        </>
    )

    return (
        <section id="waarom-prologg" className="why-section">
            <div className="why-content">
                <header>
                    <Sectiontitle subtitle={subtitle} h2={title} />
                </header>

                <dl className="why-reasons">
                    {reason}
                </dl>
            </div>
        </section>
    )
}