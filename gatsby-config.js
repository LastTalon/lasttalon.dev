module.exports = {
  siteMetadata: {
    siteUrl: "https://lasttalon.dev",
    title: "LastTalon's Website",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
  ],
};
