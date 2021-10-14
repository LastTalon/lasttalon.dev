import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { Accent } from "./typography";

import * as styles from "./footer.module.css";

const FooterBoxItem = ({
  to,
  children,
}: {
  to?: string;
  children: ReactNode;
}) => (
  <li>
    {to ? (
      to.startsWith("/") ? (
        <Link to={to}>{children}</Link>
      ) : (
        <a href={to}>{children}</a>
      )
    ) : (
      children
    )}
  </li>
);

const FooterBox = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div className={styles.FooterBox}>
    {title ? <label>{title}</label> : undefined}
    <ul>{children}</ul>
  </div>
);

const Footer = () => (
  <footer className={styles.Footer}>
    <FooterBox>
      <FooterBoxItem>© 2021 Lucas Gangstad</FooterBoxItem>
      <FooterBoxItem>
        Built with{" "}
        <a href="https://www.gatsbyjs.com/">
          <Accent>Gatsby</Accent>{" "}
        </a>
      </FooterBoxItem>
    </FooterBox>
    <FooterBox title="Pages">
      <FooterBoxItem to="/">Home</FooterBoxItem>
      <FooterBoxItem to="/projects">Projects</FooterBoxItem>
      <FooterBoxItem to="/contact">Contact</FooterBoxItem>
      <FooterBoxItem to="/about">About</FooterBoxItem>
    </FooterBox>
  </footer>
);

export default Footer;
