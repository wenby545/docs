module.exports = {
    themeConfig: {
        // navbar: false,
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },

            {
                text: 'java', link: '/java/',
                items: [
                    { text: '基础', link: '/java/基础.html' },
                    { text: '进阶', link: '/java/进阶.html' }
                ]
            },
            { text: 'python', link: '/python.html' },
        ]
    }

}