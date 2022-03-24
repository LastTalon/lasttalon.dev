import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { Page } from "../components/layout";
import { Box, BoxFeature, BoxLayout } from "../components/boxLayout";
import { Paragraph, FloatingImage } from "../components/typography";

import * as styles from "./index.module.css";
import portrait from "../images/logo.png";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import discord from "../images/discord.svg";
import mail from "../images/mail.svg";

const MediaLink = ({
  to,
  image,
  children,
}: {
  to: string;
  image: string;
  children: ReactNode;
}) => (
  <div className={styles.MediaLink}>
    <a href={to}>
      <img src={image} />
      {children}
    </a>
  </div>
);

const PageLink = ({
  to,
  name,
  children,
}: {
  to: string;
  name: string;
  children: ReactNode;
}) => (
  <p>
    <Link to={to}>{name}</Link> — {children}
  </p>
);

const IndexPage = () => (
  <Page>
    <BoxLayout>
      <BoxFeature title="LastTalon" subtitle="that's me!">
        <FloatingImage image={portrait} right />
        <Paragraph>
          I'm Lucas, I go by LastTalon online. I'm a programmer and often work
          on open source projects and things I enjoy. In my spare time you can
          find me playing video games, tabletop RPGs, cooperative board games,
          reading books, or researching science and technology.
        </Paragraph>
        <Paragraph>
          I have several projects going on that you can find on my{" "}
          <Link to="/projects">project page</Link> or{" "}
          <a href="https://github.com/LastTalon">GitHub profile</a>. I'm
          currently working on a Roblox collections library called{" "}
          <a href="https://lasttalon.github.io/Monolith/">Monolith</a>. I'm also
          a programmer for a upcoming Roblox game called{" "}
          <a href="https://twitter.com/BloopVilleGame">BloopVille</a>. To get in
          touch with me you can check my accounts on this page or check out my{" "}
          <Link to="/contact">contact page</Link>.
        </Paragraph>
        <Paragraph>
          I enjoy working on these things and relaxing with a good game or book
          in my spare time. You can learn more about me on my{" "}
          <Link to="/about">about page</Link>.
        </Paragraph>
      </BoxFeature>
      <Box title="Contact Me" subtitle="you can find me here">
        <MediaLink to="https://twitter.com/LastTalon" image={twitter}>
          Twitter
        </MediaLink>
        <MediaLink to="https://github.com/LastTalon" image={github}>
          GitHub
        </MediaLink>
        <MediaLink
          to="https://discordapp.com/users/147536141988528128"
          image={discord}
        >
          Discord
        </MediaLink>
        <MediaLink to="mailto:last_talon@new.rr.com" image={mail}>
          Email
        </MediaLink>
        <p>
          — or you can check out my <Link to="/contact">contact page</Link>!
        </p>
      </Box>
      <Box title="Pages" subtitle="what you can find on this site">
        <PageLink name="Projects" to="/projects">
          Check out some of my projects.
        </PageLink>
        <PageLink name="Contact" to="/contact">
          Find out how you can get in touch.
        </PageLink>
        <PageLink name="About" to="/about">
          Learn some more about me.
        </PageLink>
      </Box>
    </BoxLayout>
  </Page>
);

export default IndexPage;
