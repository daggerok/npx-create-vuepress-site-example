const base = process.env.BASE || '/';
const { description } = require('../../package')

module.exports = {

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress npx create-vuepress-site guide',
      description: 'VuePress quickstart using npx create-vuepress-site',
    },
    '/ru/': {
      lang: 'ru',
      title: 'VuePress npx create-vuepress-site руководство',
      description: 'Руководство по быстрому старту используя npx create-vuepress-site',
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsDir: 'docs/src',
    repo: 'https://github.com/daggerok/npx-vuepress-example',
    editLinks: true,
    docsDir: '',
    lastUpdated: true,
    collapsable: false,
    locales: {
      '/': {
        docsDir: 'docs/src',
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit me on GitHub',
        nav: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Using Vue',
            link: '/using-vue.md'
          }
        ],
        sidebar: [
          ['/', 'Home'],
          '/using-vue',
        ],
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Языки',
        editLinkText: 'Измени меня на GitHub',
        docsDir: 'docs/src/ru',
        nav: [
          {
            text: 'Домой',
            link: '/ru/'
          },
          {
            text: 'Использование Vue',
            link: '/ru/using-vue.md'
          }
        ],
        sidebar: [
          ['/ru/', 'Начало'],
          '/ru/using-vue',
        ],
      },
    },
  },

  base,

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
