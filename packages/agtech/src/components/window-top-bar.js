import { css, styled } from 'frontity';
import React from 'react';

const Dot = styled.span`
    display: inline-block;
    width: 9px !important;
    height: 9px !important;
    margin-left: 5px !important;
    border-radius: 100%;
    background-color: var(--browserdots);
    vertical-align: baseline;
    margin-top: 12px;
`;

const WindowTopBar = () => (
    <div
        css={css`
            height: 32px;
            padding-left: 10px;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
        `}
    >
        <Dot />
        <Dot />
        <Dot />
    </div>
);

export default WindowTopBar;
