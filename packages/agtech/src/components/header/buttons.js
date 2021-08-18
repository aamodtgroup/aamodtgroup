import React from 'react';
import { styled } from 'frontity';
import Link from '../link';

export const Button = ({ buttonLink, buttonText }) => {
    return (
        <ButtonDiv>
            <Link link={buttonLink}>
                {buttonText}
            </Link>
        </ButtonDiv>
    );
};

const ButtonDiv = styled.div`
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 5px 10px;
    margin: 0 .5rem;

    a {
        color: var(--toggle);
    }
`;