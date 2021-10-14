import React, { ReactNode } from "react";
import { Link } from "gatsby";

import * as styles from "./header.module.css";
import logo from "../images/logo.png";

const NavItemContents = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <>
    <label>{name}</label>
    <p>{description}</p>
  </>
);

const NavItem = ({
  name,
  description,
  to,
}: {
  name: string;
  description: string;
  to: string;
}) => {
  let contents = <NavItemContents name={name} description={description} />;
  return (
    <li>
      {
        // If the link is internal use Link, otherwise use a normal <a>
        to.startsWith("/") ? (
          <Link to={to}>{contents}</Link>
        ) : (
          <a href={to}>{contents}</a>
        )
      }
    </li>
  );
};

const NavMenu = ({ name, children }: { name: string; children: ReactNode }) => (
  <div className={styles.NavMenu}>
    <label>{name}</label>
    <ul>{children}</ul>
  </div>
);

const Nav = () => (
  <nav className={styles.Nav}>
    <NavMenu name="Pages">
      <NavItem name="Home" description="The welcome page." to="/" />
      <NavItem
        name="Projects"
        description="Programming projects I've worked on."
        to="/projects"
      />
      <NavItem
        name="Contact"
        description="Get in contact with me."
        to="/contact"
      />
      <NavItem name="About" description="About this website." to="/about" />
    </NavMenu>
    <NavMenu name="Sites">
      <NavItem
        name="GitHub"
        description="Find my open source projects here."
        to="https://github.com/LastTalon"
      />
      <NavItem
        name="RPG"
        description="My tabletop RPGs hosted using FoundryVTT."
        to="https://rpg.lasttalon.dev/"
      />
    </NavMenu>
  </nav>
);

const Logo = () => <img src={logo} alt="LastTalon" />;

const Title = () => (
  <Link to="/" className={styles.Title}>
    <Logo />
    <h1>LastTalon</h1>
  </Link>
);

const Header = () => (
  <header className={styles.Header}>
    <Title />
    <Nav />
  </header>
);

export default Header;
