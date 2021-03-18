const settings = {
  name: "aamodtgroup",
  state: {
    frontity: {
      url: "https://aamodtgroup.com",
      title: "Aamodt Group",
      description: "Konsulenter innen utvikling og drift"
    }
  },
  packages: [
    {
      name: "@aamodtgroup/agtech",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://backend.aamodtgroup.com",
          homepage: "/hjem",
          postTypes: [
            {
              type: "blogg",
              endpoint: "blogg",
            },
          ],
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-KLB4V9S",
        }
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;