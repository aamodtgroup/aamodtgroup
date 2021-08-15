import React from 'react';
import { connect, Global, css, styled, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import Footer from './footer/footer';
import List from './list';
import Post from './pages/post';
import Page from './pages/page';
import HomePage from './pages/homepage';
import Loading from './pages/loading';
import PageError from './pages/page-error';
import FontFace from './styles/font-face';
import DarkMode from './styles/dakmode';
import gutenbergStyle from './styles/gutenberg/style.min.css';
import gutenbergTheme from './styles/gutenberg/theme.min.css';
import BootstrapCss from './styles/bootstrap.css';
import customStyle from './styles/style';
import Header from './header/header';
import Toggle from './toggle/toggle';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    return (
        <>
            {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
            <Global styles={css(BootstrapCss)} />
            <Global styles={css(gutenbergStyle)} />
            <Global styles={css(gutenbergTheme)} />
            <Global styles={customStyle} />

            {/* Loads fonts. */}
            <FontFace />

            {/* Loads darkmode. */}
            <DarkMode />

            {/* Loads toggle. */}
            <Toggle />

            {/* Add some metatags to the <head> of the HTML. */}
            <Head>
                <link rel="preconnect" href={state.source.api} />
                <html lang="en" />
            </Head>

            {/* Add the header of the site. */}
            <Header />

            {/* Add the main section. It renders a different component depending
            on the type of URL we are in. */}
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <HomePage when={data.isHome} />
                    <Page
                        when={data.isPage || data.isProjects || data.isServices}
                    />
                    <Post when={data.isPostType} />
                    <PageError when={data.isError} />
                </Switch>
            </Main>

            {/* Add the footer of the site. */}
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
};

export default connect(Theme);

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 90px;
`;
