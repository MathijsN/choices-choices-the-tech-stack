import Hero from "../components/organisms/Hero";
import Why from "../components/organisms/Why";
import GetInvolved from "../components/organisms/GetInvolved";
import { getSiteContent } from "../lib/content";

export default function HomePage() {
  const content = getSiteContent();

  return (
    <main>
      <Hero
        title={content.hero.title}
        description={content.hero.description}
        imageWebpFallback={content.hero.imageWebpFallback}
        imageWebp={content.hero.imageWebp}
        imageAvif={content.hero.imageAvif}
        button={content.hero.buttons}
      />
      <Why
        subtitle={content.why.subtitle}
        title={content.why.title}
        reasons={content.why.reasons}
      />
      <GetInvolved
        subtitle={content.getInvolved.subtitle}
        title={content.getInvolved.title}
        cards={content.getInvolved.cards}
      />
    </main>
  );
}