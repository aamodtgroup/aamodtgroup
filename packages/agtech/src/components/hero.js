import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';
import arrow from '../images/arrow_right.svg';
import arrowWhite from '../images/arrow_right_white.svg';

const Hero = () => {
    return (
        <>
            <HeroContainer className="wp-block-section">
                <div className="wp-block-section__inner-container">
                    <h1>Aamodt Group - Konsulenter innen utvikling og drift</h1>
                    <p>
                        Vi hjelper deg med alle dine behov innen utvikling og
                        drift.
                    </p>
                    <div className="buttons">
                        <Link link="/blogg/">
                            <button className="wp-block-button__link underline">
                                Blogg
                            </button>
                        </Link>
                        <Link link="/kontakt-oss/">
                            <button className="wp-block-button__link underline">
                                Kontakt oss
                            </button>
                        </Link>
                    </div>
                </div>
            </HeroContainer>
        </>
    );
};

export default connect(Hero);

const HeroContainer = styled.div`
    h1 {
        font-family: recoleta;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    }

    .buttons .wp-block-button__link {
        margin-bottom: 1rem;
        margin-right: 2rem;
        position: relative;

        &.underline {
            background: transparent;
            color: var(--text);
            border-radius: 0px;
            border-bottom: 2px solid var(--text);
            padding: 0;
            padding-right: 1.875em;
            padding-bottom: 0.375em;
            font-size: 0.875rem;

            :after {
                content: '';
                position: absolute;
                top: 0.15rem;
                right: 0;
                width: 24px;
                height: 24px;
                transition: 0.25s ease;
                background-size: contain;
                background-position: 50%;
                background-repeat: no-repeat;
            }

            :hover:after {
                transform: translateX(3px);
            }
        }
    }
`;
