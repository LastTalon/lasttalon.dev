import React from "react";
import { Link } from "gatsby";
import { Page } from "../components/layout";
import { BoxFeature, BoxLayout } from "../components/boxLayout";

const NotFoundPage = () => (
  <Page title="Not found">
    <BoxLayout>
      <BoxFeature
        title="Page not found"
        subtitle="sorry that page doesn't exist"
      >
        In the meantime, try going <Link to="/">home</Link>.
      </BoxFeature>
    </BoxLayout>
  </Page>
);

export default NotFoundPage;
