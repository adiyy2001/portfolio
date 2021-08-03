import React from "react";

import Footer from "../components/Footer/Footer.component";
import Header from "../components/Header/Header.component";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
