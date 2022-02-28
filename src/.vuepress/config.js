// dcos/.vuepress/config.js
const { navbar, sidebar }   = require('./configs');

module.exports = {
    base: '/tech/',
    title: '凡离',
    description: '还没想好',
    host: '0.0.0.0',
    port: 666,
    dest: 'docs',
    open: true,
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        repo: 'ensurich/tech/',
        contributors: true,
        editLink: true,
        lastUpdated: true,
        docsRepo: 'https://github.com/ensurich/tech',
        docsBranch: 'master',
        docsDir: 'src',
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar,
        sidebar
    },
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    plugins: [
        [
            '@vuepress/plugin-docsearch',
            {
                appId: '66L0WQD9D5',
                apiKey: '4c5789ce5924a6fc2b17c97187cd046b',
                indexName: 'ensurich',
                locales: {
                    '/': {
                        placeholder: '搜索',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消',
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除',
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接',
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者',
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    openIssueText: '你认为该查询应该有结果？',
                                    openIssueLinkText: '点击反馈',
                                },
                            },
                        },
                    }
                },
            }
        ]
    ]
}