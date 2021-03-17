import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";

const agtech = {
  name: "@aamodtgroup/agtech",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "hover",
      menu: [],
      menuUrl: "menu",
      mode: "light",
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      afterCSR: ({ state }) => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (window.localStorage.getItem("mode") === "light") {
          state.theme.mode = 'light';
        } else if (window.localStorage.getItem("mode") === "dark") {
          state.theme.mode = 'dark';
        } else {
          if (prefersDarkScheme.matches) {
            state.theme.mode = 'dark';
          }
        }
      },
      setLightMode: ({state}) => {
        state.theme.mode = 'light';
        window.localStorage.setItem("mode", "light");
      },
      setDarkMode: ({state}) => {
        state.theme.mode = 'dark';
        window.localStorage.setItem("mode", "dark");
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [menuHandler],
    },
  },
};

export default agtech;