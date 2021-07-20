const settings = {
    name: 'aamodtgroup',
    state: {
        frontity: {
            url: 'https://aamodtgroup.com',
            title: 'Aamodt Group',
            description: 'Konsulenter innen utvikling og drift',
        },
    },
    packages: [
        {
            name: '@aamodtgroup/agtech',
        },
        {
            name: '@frontity/wp-source',
            state: {
                source: {
                    url: 'https://wp.aamodtgroup.com',
                    homepage: 'home',
                    categoryBase: 'category',
                    redirections: '404',
                    params: {
                        per_page: 12,
                    },
                    postTypes: [
                        {
                            type: 'blog',
                            endpoint: 'blog',
                            archive: 'blog',
                        },
                        {
                            type: 'projects',
                            endpoint: 'projects',
                            archive: 'projects',
                        },
                        {
                            type: 'services',
                            endpoint: 'services',
                        },
                    ],
                    taxonomies: [
                        {
                            taxonomy: 'category',
                            endpoint: 'categories',
                            postTypeEndpoint: 'blog',
                        },
                    ],
                },
            },
        },
        {
            name: '@frontity/google-tag-manager-analytics',
            state: {
                googleTagManagerAnalytics: {
                    containerId: 'GTM-KLB4V9S',
                },
            },
        },
        '@frontity/tiny-router',
        '@frontity/html2react',
        '@frontity/yoast',
        '@aamodtgroup/frontity-contact-form-7',
    ],
};

export default settings;
