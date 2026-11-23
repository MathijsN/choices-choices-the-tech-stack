import styles from "./GetInvolved.module.css";
import Sectiontitle from "../atoms/Sectiontitle";
import Button from "../atoms/Button";

export default function Hero({ title, subtitle, cards = [] }) {
    const card = cards.map(card =>
        <article>
            <h3>{card.title}</h3>
            <p className="description">{card.description}</p>
            <div className="cta">
                <Button
                    href={card.button.href}
                    classes="cta"
                    content={card.button.content}
                />
            </div>
        </article>)

    return (
        <section id="doe-mee">
            <div>
                <Sectiontitle subtitle={subtitle} h2={title} />

                <div className="cards">
                    {card}
                </div>
            </div>
        </section>
    )
}