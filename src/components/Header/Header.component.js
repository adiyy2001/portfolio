import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Logo,
  LogoLink,
  PageLinks,
  SocialLinks,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Logo>
      <Link href="/">
        <LogoLink>
          <DiCssdeck size="3rem" />
          <span
            style={{
              fontSize: "3rem",
              marginLeft: "7px",
              fontFamily: "'MonteCarlo', cursive",
            }}
          >
            AT
          </span>
        </LogoLink>
      </Link>
    </Logo>
    <PageLinks>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </PageLinks>
    <SocialLinks>
      <SocialIcons href="https://google.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </SocialLinks>
  </Container>
);

export default Header;
