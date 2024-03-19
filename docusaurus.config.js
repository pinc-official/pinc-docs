const { themes } = require("prism-react-renderer");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "pinc docs",
  tagline: "",
  url: "https://pinc-official.github.io",
  baseUrl: "/pinc-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pinc-official", // Usually your GitHub org/user name.
  projectName: "pinc-docs", // Usually your repo name.
  staticDirectories: ["public", "static"],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "pinc",
          src: "logo.png",
          srcDark: "logo.png",
          width: 32,
          height: 32,
        },
        title: "pinc",
        items: [
          {
            href: "https://github.com/pinc-official",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};
