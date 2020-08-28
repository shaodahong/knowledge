module.exports = {
  title: '别问 BieWen',
  tagline: 'The tagline of my site',
  url: 'https://biewen.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shaodahong', // Usually your GitHub org/user name.
  projectName: 'biewen', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BieWen',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/shaodahong/biewen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} BieWen, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shaodahong/biewen/edit/master/docs/',
          routeBasePath: '/', // Set this value to '/'.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
