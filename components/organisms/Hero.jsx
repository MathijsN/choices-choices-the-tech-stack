import styles from "./Hero.module.css";
import Button from "../atoms/Button";

export default function Hero({ title, description, imageWebpFallback, imageWebp, imageAvif, button = [] }) {
    const buttons = button.map(button => <Button href={button.href} classes={button.variant} content={button.content} />)

    return (
        <section className="hero">
            <div className="hero-wrapper">
                <div className="hero-info-wrapper">
                    <h1>{title}</h1>
                    <div>
                        <p>
                            {description}
                        </p>
                        <div className="button-wrapper">
                            {buttons}
                        </div>
                    </div>
                </div>
                <picture>
                    <source
                        srcSet={imageAvif}
                        type="image/avif"
                        sizes="(max-width: 600px) 400px, 700px"
                    />
                    <source
                        srcSet={imageWebp}
                        type="image/webp"
                        sizes="(max-width: 600px) 400px, 700px"
                    />
                    <img
                        src={imageWebpFallback}
                        alt="person logging using prologg webapp"
                    />
                </picture>
            </div>
        </section>
    )
}