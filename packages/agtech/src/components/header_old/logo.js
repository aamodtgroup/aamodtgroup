import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import blueLogo from '../../images/3.svg';
import whiteLogo from '../../images/6.svg';
import blackLogo from '../../images/9.svg';

const Logo = ({ state }) => {
    const { mode } = state.theme;
    return (
        <>
            <Link link="/" alt="Forside link">
                <img
                    src={mode === 'light' ? blackLogo : whiteLogo}
                    width="64px"
                    height="64px"
                />
            </Link>
        </>
    );
};

export default connect(Logo);
