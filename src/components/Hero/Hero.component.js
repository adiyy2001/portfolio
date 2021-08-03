import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm web developer & programmer living in Poland, I make web
          applications, usually with Angular & react. I Enjoy building
          everything from small business sites to rich interactive web apps.
        </SectionText>
        <Button>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
