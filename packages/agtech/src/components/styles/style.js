import { css } from "frontity";

const customStyle = css`
  .wp-block-section {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .wp-block-section__inner-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 1030px) {
      max-width: 1030px;
      padding-right: 15px;
      padding-left: 15px;
      width: auto;
    }
  }

  .wp-block-columns {
    margin-bottom: 0;
  }

  .media-text {
    background-color: var(--darkbackground);
    border-radius: 15px;
    padding: 55px;
    h2 {
      letter-spacing: 0.02em;
      margin-bottom: 1rem;
      color: var(--darktext);
    }
    p {
      color: #80bbda;
      line-height: 1.5;
    }
    li {
      color: var(--darktext);
    }
    .wp-block-column {
      display: flex;
      align-items: center;
    }
    .wp-block-group {
      margin: 0;
    }
    .wp-block-image {
      height: 375px;
      width: 100%;
      margin: 0;
      border-radius: 10px;
      overflow: hidden;
    }
    .wp-block-image img {
      height: 375px;
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 1000px) {
      padding: 0;
      overflow: hidden;
      flex-direction: column-reverse;
      .wp-block-column {
        margin-left: 0px;
      }
      .wp-block-group {
        margin: 20px;
      }
      .wp-block-image {
        border-radius: 0;
        height: 300px;
      }
      .wp-block-image img {
        height: 300px;
      }
    }
  }

  .ag-grid {
    display: grid;
    grid-template-columns: repeat( 3, 1fr );
    grid-gap: 2rem;
    .hentry {
      margin: 0px;
    }
    .ag-title h2 {
      font-weight: 400;
      font-size: 1.75rem;
      :hover {
        color: var(--brand);
      }
    }
    .ag-card {
      .ag-image {
        overflow: hidden;
        height: 300px;
        width: 100%;
        border-radius: 8px;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
      }
      .ag-image img {
        transition: transform 0.5s ease;
        object-fit: cover;
        height: 300px;
        width: 100%;
        box-sizing: border-box;
      }
      :hover img {
        transform: scale(1.05);
      }
    }
    @media (max-width: 1000px) {
      grid-template-columns: repeat( 2, 1fr ) !important;
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat( 1, 1fr ) !important;
    }
  }

  .ag-grid-heading {
    display: flex;
    align-items: center;

    h2 {
      margin-right: 1rem;
    }

    a {
      font-size: 18px;
    }
  }

  input, textarea {
    border: 1px solid var(--border);
    border-radius: 8px;
    background: transparent;
    font-size: .875rem;
    display: block;
    min-height: 44px;
    padding: .6875rem 1.6875rem .75rem;
    margin-bottom: 1rem;
  }

  * {
    transition: color var(--transition);
    transition: background-color var(--transition);
    font-size: 18px;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
    background-color: var(--background);
    color: var(--text);
  }
  p {
    font-size: 1rem;
    color: var(--text);
    line-height: 1.6;
    transition: font-size var(--transition) !important;
  }
  ul {
    font-size: 20px;
    font-size: var(--textsize);
    transition: font-size var(--transition) !important;
  }
  li {
    margin: 1rem auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Recoleta", sans-serif;
    color: var(--text);
    transition: font-size var(--transition) !important;
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  h4 {
    font-size: 1.66rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.33rem;
    font-weight: 400;
  }
  h6 {
    font-size: 1rem;
    font-weight: 400;
  }
  a {
    font-size: 1rem;
    color: var(--link);
    transition: font-size var(--transition) !important;

    :hover {
      text-decoration: none;
    }
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
export default customStyle;