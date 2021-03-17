import { css } from "frontity";

const customStyle = css`
  .wp-block-group {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .media-text {
    background-color: var(--darkbackground);
    border-radius: 15px;
    padding: 55px;
    h2 {
      font-size: 48px;
      font-weight: 600;
      letter-spacing: 0.02em;
      margin-bottom: 1rem;
      color: var(--darktext);
    }
    p {
      color: #80bbda;
      font-size: 24px;
      line-height: 1.5;
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
        margin: 20px 0;
      }
      .wp-block-image {
        border-radius: 0;
        height: 300px;
      }
      .wp-block-image img {
        height: 300px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
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
    .ag-title {
      color: var(--black);
      h3 {
        font-size: 24px;
        font-weight: 600;
      }
      :hover {
        color: var(--brand);
      }
    }
    @media (max-width: 1000px) {
      grid-template-columns: repeat( 2, 1fr ) !important;
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat( 1, 1fr ) !important;
    }
  }

  .contact_hero {
    height: calc(100vh - 80px);

    @media (max-width: 600px) {
      height: auto;
    }

    .wp-block-cover__inner-container {
      width: 100%;
    }

    .wp-block-group__inner-container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .wp-block-contact-form-7-contact-form-selector {
      width: 100%;
      max-width: 500px;
      background-color: rgba(255, 255, 255, .6);
      border-radius: 12px;
      padding: 2rem 1rem;

      :focus {
        outline: none;
      }

      label {
        color: black;
        // text-transform: uppercase;
      }

      input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid black;
        width: 80%;
      }

      textarea {
        background-color: rgba(255, 255, 255, .5);
        border-radius: 12px;
        border: none;
        width: 100% !important;
        padding: 0.5rem 1rem;
      }

      .submit_button {
        width: 75%;
        text-align: right;
        margin-left: auto;
        
        input {
          border: none;
          background-color: #001220;
          padding: 12px 6px;
          color: white;
          font-size: 18px;
          margin-right: -1rem;
          border-radius: 12px 0px 0px 12px;
        }
      }
    }
  }
`;
export default customStyle;