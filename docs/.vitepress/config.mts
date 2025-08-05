import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'jit-anes',
  description: "Description",

  head: [['link', { rel: 'icon', href: '/greek-gamma.svg' }]],

  sitemap: {
    hostname: 'https://jit.cugammadex.com/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/greek-gamma.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/elijahc/jit-anes' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rotations',
        items: [
          { text: "All rotations", link: '/r'},
        ]}
    ],

    sidebar: {
      '/supplemental/': [
        {
          text: 'Extras',
          items: [
            // { text: 'Forward', link '/'},
            { text: 'Important Contacts', link: '/contacts'},
            { text: 'Housekeeping', link: '/house-keeping-items'},
            { text: 'Intern Intro', link: '/interns'},
            { text: 'QGenda Glossary', link: '/ref/qgenda-glossary'},
          ],
        },
        {
          text: 'Rotations',
          items: [
            { text: 'CT', link: '/r/ct'},
            { text: 'NORA', link: '/r/nora'},
            { text: 'OB', link: '/r/ob'},
            { text: 'Transplant', link: '/r/txp'}
          ]
        }
      ]
    },
    
    editLink: {
      pattern: 'https://github.com/elijahc/cugammadex/edit/main/docs/:path'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
  }
});
