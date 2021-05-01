/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Engineering Handbook',
  tagline: 'Find out my engineering design process.',
  url: 'https://MustafaKhan670093.github.io',
  baseUrl: '/Engineering-Handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MustafaKhan670093', // Usually your GitHub org/user name.
  projectName: 'MustafaKhan670093.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Engineering Handbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Main Website',
              to: 'http://mustafarehanahmadkhan.com/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mustafarehanahmadkhan/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MustafaKhan670093',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mustafa Khan`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/MustafaKhan670093/Engineering-Handbook',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/MustafaKhan670093/Engineering-Handbook',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
