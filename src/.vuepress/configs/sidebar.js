module.exports = {
    '/todo/': [
        {
            text: '正在进行',
            collapsible: false,
            children: [
                {
                    text: 'TODO',
                    link: '/todo/'
                }
            ]
        },
        {
            text: '面试',
            children: [
                '/todo/android-interview.md',
                {
                    text: 'Web 面试',
                    children: [
                        '/todo/web-interview/',
                        '/todo/web-interview/js',
                        '/todo/web-interview/html',
                        '/todo/web-interview/02',
                    ]
                }
            ]
        },
        '/todo/vuepress.md'
    ],
    '/lang/': [
        '/lang/',
        {
            text: 'JavaScript',
            children: [
                '/lang/js/',
                '/lang/js/how-to-use-es6-import-in-nodejs.md'
            ]
        },
        {
            text: 'TypeScript',
            children: [
                '/lang/ts/',
                '/lang/ts/advanced.md'
            ]
        },
    ],
    '/mac/': [
        '/mac/',
        '/mac/mac-env.md',
        {
            text: 'CLI',
            children: [
                '/mac/cli/git.md',
                '/mac/cli/homebrew.md',
                '/mac/cli/macports.md',
                '/mac/cli/ruby.md',
                '/mac/cli/china-mirrors.md'
            ]
        },

    ]
};
