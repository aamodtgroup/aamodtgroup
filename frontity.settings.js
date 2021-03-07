const settings = {
  "name": "aamodtgroup",
  "state": {
    "frontity": {
      "url": "https://aamodtgroup.com",
      "title": "Aamodt Group",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@aamodtgroup/agtech",
      "state": {
        "theme": {}
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://backend.aamodtgroup.com",
          "homepage": "/hjem",
          "postTypes": [
            {
              type: "blogg",
              endpoint: "blogg",
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
