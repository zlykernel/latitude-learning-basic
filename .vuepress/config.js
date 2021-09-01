module.exports = {
    title: '纵横学习法-基础版',
    description: '发现你身边的基础知识',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ],
    host: '0.0.0.0',
    port: 8080,
    dest: '.vuepress/dist',
    plugins: [
        ['vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: ''
            }
        ],
        ['vuepress-plugin-container',
            {
                type: 'center',
                defaultTitle: ''
            }
        ],
        ['vuepress-plugin-container',
            {
                type: 'quote',
                before: info => `<div class="quote"><p class="title">${info}</p>`,
                after: '</div>'
            },
        ],
        ['vuepress-plugin-container',
            {
                type: 'not-print',
                defaultTitle: ''
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-162170924-1'
            }
        ],
        ['@vuepress/back-to-top'],
        require('./plugins/read-time'),
        require('./plugins/export')
    ],
    markdown: {
        anchor: { permalink: false },
        toc: { includeLevel: [2, 3] },
        extendMarkdown: md => {
            md.use(require('markdown-it-mermaid').default);
            md.use(require('markdown-it-sub'));
            md.use(require('markdown-it-sup'));
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-ins'));
            md.use(require('markdown-it-figure'));
            md.use(require('markdown-it-smartarrows'));
            md.use(require('markdown-it-fontawesome'));
        }
    },
    themeConfig: {
        logo: '/images/logo-color.png',
        lastUpdated: '最后更新',
        smoothScroll: true,
        editLinks: true,
        editLinkText: '在GitHub中编辑',
        // 添加导航栏
        nav: [
            { text: '首页', link: '/' }
        ],
        sidebar: [
            {
                title: '目录',
                collapsable: false,
                path: '/SUMMARY.md'
            }, {
                title: '前言',
                collapsable: false,
                children: [
                    '/introduction/about-me',
                ]
            }
        ]
    }
};
