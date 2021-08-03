import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiCivicrm } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  LogoHeadline,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development. From
      frontend to backend
    </SectionText>
    <List>
      <ListItem>
        <LogoHeadline>
          <DiReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
        </LogoHeadline>
        <ListContainer>
          <ListParagraph>HTML | CSS</ListParagraph>
          <ListParagraph>SCSS | Bootstrap</ListParagraph>
          <ListParagraph>javascript/ES6/ES7 | Typescript</ListParagraph>
          <ListParagraph>Angular, Angular Material</ListParagraph>
          <ListParagraph>RxJs, Ngrx</ListParagraph>
          <ListParagraph>React | Redux</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <LogoHeadline>
          <DiFirebase size="3rem" />
          <ListTitle>Back-End</ListTitle>
        </LogoHeadline>
        <ListContainer>
          <ListParagraph>NodeJS | Express.js</ListParagraph>
          <ListParagraph>MongoDB | GraphQL</ListParagraph>
          <ListParagraph>NestJs</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <LogoHeadline>
          <SiCivicrm size="3rem" />
          <ListTitle>Other skills</ListTitle>
        </LogoHeadline>
        <ListContainer>
          <ListParagraph>Github | Git</ListParagraph>
          <ListParagraph>Npm | yarn</ListParagraph>
          <ListParagraph>Jira</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
