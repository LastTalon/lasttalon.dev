import React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Roboto, sans-serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const headingAccentStyles = {
  color: "#663399",
};

const paragraphStyles = {
  marginBottom: 48,
};

const IndexPage = () => (
  <main style={pageStyles}>
    <title>LastTalon</title>
    <h1 style={headingStyles}>
      LastTalon.dev
      <br />
      <span style={headingAccentStyles}>— coming soon!</span>
    </h1>
    <p style={paragraphStyles}>The website is currently under construction.</p>
  </main>
);

export default IndexPage;
