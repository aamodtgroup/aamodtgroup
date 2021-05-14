import { connect, css, Global } from "frontity";
import React from "react";

import Recoleta400 from "../../fonts/recoleta/recoleta400.woff2";
import Baskervville400 from "../../fonts/baskervville/baskervville400.woff2";

const FontFace = () => {
    return (
        <>
            <Global
                styles={css`
                @font-face {
                    font-family: "Recoleta";
                    src: url(${Recoleta400});
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
                @font-face {
                    font-family: "Baskervville";
                    src: url(${Baskervville400});
                    font-weight: 400;
                    font-display: swap;
                    font-style: normal;
                }
                `}
            />
        </>
    );
};

export default connect(FontFace);