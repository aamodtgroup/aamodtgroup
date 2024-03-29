import { connect, css, Global } from 'frontity';
import React from 'react';
import arrow from '../../images/arrow_right.svg';
import arrowWhite from '../../images/arrow_right_white.svg';

const DarkMode = ({ state }) => {
    const { mode, text } = state.theme;
    return (
        <>
            <Global
                styles={css`
                    :root {
                        --brand: #0077b5;
                        --text: ${mode === 'light' ? '#212121' : '#fff'};
                        --darktext: ${mode === 'light' ? '#fff' : '#fff'};
                        --background: ${mode === 'light' ? '#eee' : '#121212'};
                        --background2: ${mode === 'light' ? '#fff' : '#121212'};
                        --background3: ${mode === 'light' ? '#eee' : '#121212'};
                        --background4: ${mode === 'light' ? '#fff' : '#1E1E1E'};
                        --background5: ${mode === 'light' ? '#eee' : '#1E1E1E'};
                        --menubackground: ${mode === 'light'
                            ? '#fff'
                            : '#1E1E1E'};
                        --headerbackground: ${mode === 'light'
                            ? '#121212'
                            : '#1E1E1E'};
                        --childmenubackground : ${mode === 'light' ? '#1E1E1E' : '#1E1E1E'};
                        --postbackground: ${mode === 'light'
                            ? '#F2F3FC'
                            : '#1E1E1E'};
                        --darkbackground: ${mode === 'light'
                            ? '#042a4e'
                            : '#1E1E1E'};
                        --border: ${mode === 'light' ? '#e0e0e0' : '#333'};
                        --title: ${mode === 'light' ? '#0077b5' : '#80bbda'};
                        --link: ${mode === 'light' ? '#0077b5' : '#80bbda'};
                        --button: ${mode === 'light' ? '#0077b5' : '#1E1E1E'};
                        --toggle: ${mode === 'light' ? '#fff' : '#fff'};
                        --menutogglehover: ${mode === 'light'
                            ? '#0077b5'
                            : '#80bbda'};
                        --menutogglehoverclose: ${mode === 'light'
                            ? '#000'
                            : '#80bbda'};
                        --cookiebar: ${mode === 'light' ? '#fff' : '#0077b5'};
                        --cookiebarbutton: ${mode === 'light'
                            ? '#0077b5'
                            : '#fff'};
                        --cookiebartext: ${mode === 'light'
                            ? '#fff'
                            : '#0077b5'};
                        --code: ${mode === 'light' ? '#121212' : '#343434'};
                        --logocolor: ${mode === 'light' ? '#0077b5' : '#fff'};
                        --browserbar: ${mode === 'light'
                            ? '#f3f3f3'
                            : '#323232'};
                        --browserdots: ${mode === 'light'
                            ? '#C5C8D6'
                            : '#C5C8D6'};
                        --transition: 500ms ease;
                        --textsize: ${text === 'normal'
                            ? '1.25rem'
                            : '1.625rem'};
                        --asize: ${text === 'normal' ? '1.25rem' : '1.625rem'};
                        --h1size: ${text === 'normal' ? '2.5rem' : '3rem'};
                        --h1sizehero: ${text === 'normal' ? '3rem' : '3.5rem'};
                        --h2size: ${text === 'normal' ? '2rem' : '2.5rem'};
                        --h2sizecard: ${text === 'normal' ? '1.5rem' : '2rem'};
                        --h3size: ${text === 'normal' ? '1.75rem' : '2.25rem'};
                        --h4size: ${text === 'normal' ? '1.5rem' : '2rem'};
                        --h5size: ${text === 'normal'
                            ? '1.375rem'
                            : '1.875rem'};
                        --h6size: ${text === 'normal' ? '1.25rem' : '1.75rem'};
                        --footerp: ${text === 'normal' ? '16px' : '20px'};
                        --navlinks: ${text === 'normal' ? '18px' : '24px'};
                        --togglecolor: ${mode === 'light' ? '#1E1E1E' : '#008000'};
                        --togglecolor2: ${text === 'normal' ? '#1E1E1E' : '#008000'};
                    }

                    html {
                        font-size: ${text === 'normal' ? '18px' : '22px'};

                        @media (max-width: 600px) {
                            font-size: ${text === 'normal' ? '15px' : '18px'};
                        }
                    }

                    .buttons .wp-block-button__link.underline:after {
                        background-image: url(${mode === 'light' ? arrow : arrowWhite});
                    }
                `}
            />
        </>
    );
};

export default connect(DarkMode);
