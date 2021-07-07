import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
    // Get the total posts to be displayed based for the current link
    const { next, previous } = state.source.get(state.router.link);

    // Pre-fetch the the next page if it hasn't been fetched yet.
    useEffect(() => {
        if (next) actions.source.fetch(next);
    }, []);

    return (
        <Container>
            {/* If there's a next page, render this link */}
            <div>
                {/* If there's a previous page, render this link */}
                {previous && (
                    <Link link={previous}>
                        <Text>← Forrige side</Text>
                    </Link>
                )}
            </div>

            <div>
                {next && (
                    <Link link={next}>
                        <Text>Neste side →</Text>
                    </Link>
                )}
            </div>
        </Container>
    );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`;

const Text = styled.p`
    display: inline-block;
    font-style: italic;
`;
