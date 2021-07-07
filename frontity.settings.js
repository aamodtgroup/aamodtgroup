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
                    homepage: 'hjem',
                    categoryBase: 'kategori',
                    params: {
                        per_page: 12,
                    },
                    postTypes: [
                        {
                            type: 'blogg',
                            endpoint: 'blogg',
                            archive: 'blogg',
                        },
                        {
                            type: 'prosjekter',
                            endpoint: 'prosjekter',
                            archive: 'prosjekter',
                        },
                        {
                            type: 'tjenester',
                            endpoint: 'tjenester',
                        },
                    ],
                    taxonomies: [
                        {
                            taxonomy: 'category',
                            endpoint: 'categories',
                            postTypeEndpoint: 'blogg',
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
