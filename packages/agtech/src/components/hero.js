import React, { useEffect } from "react";
import { connect, styled } from 'frontity';
import Link from './link';
import LatestPost from './latest';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <div className="__inner">
                        <h1>
                            Aamodt Group - Consultants in development and operations
                        </h1>
                        <p>
                            We help you with all your needs in development and
                            operation.
                        </p>
                        <div className="buttons">
                            <div className="custom-button">
                                <Link link="/blog/" className="custom-button__link">
                                    Blog
                                </Link>
                            </div>
                            <div className="custom-button">
                                <Link link="/contact/" className="custom-button__link">
                                    Contact
                                </Link>
                            </div>
                        </div>
                </div>
            </HeroContainer>
        </>
    );
};

export default connect(Hero);

const HeroContainer = styled.div`
    background-color: #0077b5;
    min-height: calc(100vh - (47px * 2));
    width: 100%;
    margin: 47px 2rem;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    .__inner {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        width: 100%;
        max-width: 425px;
        margin: 0 auto;
    }

    .custom-button {
        width: 100%;
        transition: transform .25s ease;

        .custom-button__link {
            display: inline-block;
            width: 100%;
            background-color: #fff;
            padding: 10px 30px;
            border-radius: 25px;
            text-align: center;
            cursor: pointer;
            color: var(--brand);
        }

        :hover {
            transform: scale(1.025);
        }
    }

    @media (max-width: 600px) {
        min-height: auto;
        margin: 94px 7px 7px 7px;
        padding: 4rem 15px;
    }

    h1 {
        font-family: recoleta;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #fff;
        text-align: center;
        width: 100%;
    }

    p {
        color: #fff;
        margin-bottom: 1rem;
        text-align: center;
        width: 100%;
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
