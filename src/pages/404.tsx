import React from "react";
import { Link } from "gatsby";
import { Page } from "../components/layout";

const NotFoundPage = () => (
  <Page>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <br />
      <br />
      <Link to="/">Go home</Link>.
    </p>
  </Page>
);

export default NotFoundPage;
