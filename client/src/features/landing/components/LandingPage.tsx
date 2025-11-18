import { FeaturesSlider } from './CardFeature';
import { Footer } from './Footer';
import { HeaderLandig } from './HeaderLandig';
import { HeroLandig } from './heroLandig';
import { Section4 } from './Section4';
import { SectionTwo } from './SectionTwo';

export function LandingPage() {
  return (
    <>
      {/* Header de landing page */}
      <HeaderLandig />
      {/* Hero de landing page */}
      <HeroLandig />
      {/* Section two */}
      <SectionTwo />
      {/* Sectio feature */}
      <FeaturesSlider />
      {/* Section 4 */}
      <Section4 />
      {/* Footer */}
      <Footer />
    </>
  );
}
