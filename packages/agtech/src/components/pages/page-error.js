import React from 'react';
import { styled, connect } from 'frontity';
import Link from '../link';
import Lottie from 'react-lottie-player';
import animationData from '../../lottie/space404.json';

const description404 = (
    <>
        <strong>Denne siden kan ikke bli funnet </strong>
        <span role="img" aria-label="confused face">
            😕
        </span>
        <br></br>
        <button className="wp-block-button__link">
            <Link link="/">Tilbake til hjem</Link>
        </button>
    </>
);

const description = (
    <>
        Don&apos;t panic! Seems like you encountered an error. If this persists,
        <a href="https://example.com"> let us know </a> or try refreshing your
        browser.
    </>
);

// The 404 page component
const Page404 = ({ state }) => {
    const data = state.source.get(state.router.link);

    const title = 'Oops! Noe gikk galt';

    return (
        <Container>
            {data.is404 ? (
                <div className="lottie-div">
                    <Lottie
                        loop
                        animationData={animationData}
                        play
                        style={{ width: 500, height: 500 }}
                    />
                </div>
            ) : (
                <Title>title</Title>
            )}
            <Description>
                {data.is404 ? description404 : description}
            </Description>
        </Container>
    );
};

export default connect(Page404);

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 500px;
    margin: 0;
    padding: 24px;
    text-align: center;

    .lottie-div {
        background-color: white;
        border-radius: 100%;
    }
`;

const Title = styled.h1`
    margin: 0;
    margin-top: 24px;
    margin-bottom: 8px;
    color: var(--text);
    font-size: 4em;
`;

const Description = styled.div`
    line-height: 1.6em;
    color: var(--text);
    margin: 24px 0;
`;
