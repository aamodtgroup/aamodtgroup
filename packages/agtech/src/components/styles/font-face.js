import { connect, css, Global } from "frontity";
import React from "react";

import Roboto400 from "../../fonts/roboto400.woff2";
import Roboto500 from "../../fonts/roboto500.woff2";
import Roboto700 from "../../fonts/roboto700.woff2";
import Poppins400 from "../../fonts/poppins400.woff2";
import Poppins500 from "../../fonts/poppins500.woff2";
import Poppins600 from "../../fonts/poppins600.woff2";
import Poppins700 from "../../fonts/poppins700.woff2";

const FontFace = () => {
    return (
        <>
            <Global
                styles={css`
                @font-face {
                    font-family: "Poppins";
                    src: url(${Poppins400});
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Poppins";
                    src: url(${Poppins500});
                    font-weight: 500;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Poppins";
                    src: url(${Poppins600});
                    font-weight: 600;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Poppins";
                    src: url(${Poppins700});
                    font-weight: 700;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Roboto";
                    src: url(${Roboto400});
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Roboto";
                    src: url(${Roboto500});
                    font-weight: 500;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Roboto";
                    src: url(${Roboto700});
                    font-weight: 700;
                    font-display: swap;
                    font-style: normal;
                }
                `}
            />
        </>
    );
};

export default connect(FontFace);