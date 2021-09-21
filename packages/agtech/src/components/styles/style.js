import { css } from 'frontity';

const customStyle = css`
    .wp-block-section {
        padding: 2rem 2rem;

        @media (max-width: 600px) {
            padding: 0;
        }
    }

    .wp-block-section__inner-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
        background-color: var(--background4);
        padding: 2rem;
        border-radius: 25px;
        box-shadow: 0 2px 4px rgb(0 0 0 / 16%);

        @media (max-width: 600px) {
            max-width: 630px;
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
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        .hentry {
            margin: 0px;
        }
        .ag-title h2 {
            font-weight: 400;
            font-size: 1.75rem;
        }
        .ag-card {
            background-color: var(--background2);
            overflow: hidden;
            box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
            transition: transform 0.5s ease;
            border-radius: 15px;
            position: relative;

            .card-content {
                padding: 1rem;
            }

            .ag-image {
                height: 300px;
                width: 100%;
            }

            .ag-image img {
                object-fit: cover;
                height: 300px;
                width: 100%;
                box-sizing: border-box;
            }

            .ag-categories {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 1rem;
                gap: .5rem;
            }

            .ag-category a {
                background-color: var(--background3);
                padding: 5px 15px;
                border-radius: 5px;
            }

            :hover {
                transform: scale(1.025);
            }

            .ag-link {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
                opacity: 0;
                height: 100%;
                width: 100%;
                text-decoration: none;
            }

            .cat-link {
                position: relative;
                z-index: 1;
            }
        }
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr) !important;
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr) !important;
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

    input,
    textarea {
        border: 1px solid var(--border);
        border-radius: 8px;
        background: transparent;
        font-size: 0.875rem;
        display: block;
        min-height: 44px;
        padding: 0.6875rem 1.6875rem 0.75rem;
        margin-bottom: 1rem;
        width: 100%;
        max-width: 450px;
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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
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
        font-family: 'Recoleta', sans-serif;
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
        font-size: inherit;
        color: var(--link);
        transition: font-size var(--transition) !important;

        :hover {
            text-decoration: none;
        }
    }
    p,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    li,
    ul {
        word-break: break-word;
    }
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;
export default customStyle;
