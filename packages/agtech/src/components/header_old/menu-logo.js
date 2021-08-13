import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import whiteLogo from '../../images/6.svg';

const Logo = () => {
    return (
        <>
            <Link link="/" alt="Forside link">
                <img src={whiteLogo} width="64px" height="64px" />
            </Link>
        </>
    );
};

export default connect(Logo);
