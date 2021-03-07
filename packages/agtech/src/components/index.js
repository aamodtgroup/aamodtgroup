import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import favicon from "../images/favicon.png";
import Switch from "@frontity/components/switch";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./pages/post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Loading from "./pages/loading";
import PageError from "./pages/page-error";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import BootstrapCss from './styles/bootstrap.css';
import customStyle from './styles/dist/customstyle.css';
import TopNavbar from "./header/topnavbar";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
 const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <html lang="no" />
        <link rel="shortcut icon" type="image/jpg" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={css(customStyle)} />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <TopNavbar />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} /> 
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site. */}
      <FooterContainer>
        <Footer/>
      </FooterContainer>      
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --brand: #0077b5;
    --black: #000000;
    --white: #ffffff;
    --bodycolor: #343434;
    --blue-text: #80bbda;
    --background: #002f48; 
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    color: #043959;
    font-family: 'Roboto', sans-serif;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: var(--black);
    line-height: 1.7;
  }
  ul {
    font-size: 20px;
    color: var(--black);
  }
  li {
    margin: 1rem auto !important;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--black);
  }
  a {
    color: var(--brand);
  }
  #root {
    display:flex;
    flex-direction: column;
    height: 100%;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section{
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
  .ag-card {
    .ag-image {
      overflow: hidden;
      height: 300px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .ag-image img {
      transition: transform .5s ease;
      object-fit: cover;
      height: 300px;
      width: 100%;
      box-sizing: border-box;
    }
    :hover img {
      transform: scale(1.05);
    }
  }
`;

const HeadContainer = styled.div`
`;

const FooterContainer = styled.div`
  display: flex;
  width:100%;
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
