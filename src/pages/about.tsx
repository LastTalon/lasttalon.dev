import React from "react";
import { Page } from "../components/layout";
import { BoxFeature, BoxLayout } from "../components/boxLayout";

const AboutPage = () => (
  <Page title="About">
    <BoxLayout>
      <BoxFeature title="About" subtitle="coming soon!">
        <p>This page is currently under construction.</p>
      </BoxFeature>
    </BoxLayout>
  </Page>
);

export default AboutPage;
