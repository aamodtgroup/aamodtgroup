import { css } from "frontity";

import TopBar from "../components/window-top-bar.js";

export const webBrowser  = {
  name: "web-browser",
  test: ({ node }) => node.type === "element" && node.props?.className?.split(" ").includes("has-browser-window"),

  processor: ({ node }) => {
    const topFrame = {
      type: "element",
      component: TopBar,
      props: {},
      // we need to pass empty props, because other processors might
      // expect `.props` to exist
    };

    node.children.unshift(topFrame);

    node.props.css = css`
      ${node.props.css};
      box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
      background-color: var(--browserbar);
      border-radius: 12px;
      display: inline-flex;
      flex-flow: column nowrap;
      overflow: hidden;
      width: 100%;
      /* override the default WP styles */
      .wp-block-image {
        margin: 0;
      }
      /* override the default WP styles */
      .wp-block-group__inner-container {
        vertical-align: bottom;
      }
      img,
      iframe,
      video {
        display: block;
      }
    `;

    return node;
  },
};