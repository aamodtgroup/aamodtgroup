import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import CookieConsent from "react-cookie-consent";
import favicon from "../images/favicon.png";
import Switch from "@frontity/components/switch";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./pages/post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Loading from "./pages/loading";
import PageError from "./pages/page-error";
import FontFace from "./styles/font-face"
import gutenbergStyle from "./styles/gutenberg/style.min.css";
import gutenbergTheme from "./styles/gutenberg/theme.min.css";
import BootstrapCss from "./styles/bootstrap.css";
import customStyle from "./styles/style";
import TopNavbar from "./header/topnavbar";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const { mode } = state.theme;

  return (
    <>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={customStyle} />
      <Global styles={globalStyles} />
      <Global styles={ css`
        :root {
          --text: ${mode === 'light' ? '#212121': '#fff'};
          --darktext: ${mode === 'light' ? '#fff': '#fff'};
          --background: ${mode === 'light' ? '#fff': '#121212'};
          --menubackground: ${mode === 'light' ? '#0077b5': '#121212'};
          --postbackground: ${mode === 'light' ? '#F2F3FC': '#1E1E1E'};
          --darkbackground: ${mode === 'light' ? '#042a4e': '#1E1E1E'};
          --border: ${mode === 'light' ? '#e0e0e0': '#333'};
          --title: ${mode === 'light' ? '#0077b5': '#80bbda'};
          --link: ${mode === 'light' ? '#0077b5': '#80bbda'};
          --button: ${mode === 'light' ? '#0077b5': '#1E1E1E'};
          --menutogglehover: ${mode === 'light' ? '#0077b5': '#80bbda'};
          --menutogglehoverclose: ${mode === 'light' ? '#000': '#80bbda'};
          --cookiebar: ${mode === 'light' ? '#fff': '#0077b5'};
          --cookiebarbutton: ${mode === 'light' ? '#0077b5': '#fff'};
          --cookiebartext: ${mode === 'light' ? '#fff': '#0077b5'};
          --code: ${mode === 'light' ? '#121212': '#343434'};
          --transition: 500ms;
        }` }
      />

      {/* Loads fonts. */}
      <FontFace />
      
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <link rel="preconnect" href="https://backend.aamodtgroup.com/" />
        <link rel="preconnect" href="https://api.websitecarbon.com/" />
        <html lang="no" />
        <link rel="shortcut icon" type="image/jpg" href={favicon} />
      </Head>

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
        <Footer />
      </FooterContainer>
      <CookieConsent
        location="bottom"
        buttonText="Godta"
        enableDeclineButton
        declineButtonText="Avslå"
        cookieName="tagmanager"
        style={{ background: "var(--cookiebar)", color: "var(--text)" }}
        buttonStyle={{ background: "var(--cookiebarbutton)", color: "var(--cookiebartext)", fontSize: "16px", borderRadius: "12px" }}
        declineButtonStyle={{ borderRadius: "12px" }}
        expires={365}
      >
        Dette nettstedet bruker informasjonskapsler for å forbedre brukeropplevelsen.{" "}
      </CookieConsent>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  * {
    transition: color var(--transition);
    transition: background-color var(--transition);
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
    font-family: "Roboto", sans-serif;
    background-color: var(--background);
    color: var(--text);
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: var(--text);
    line-height: 1.7;
  }
  ul {
    font-size: 20px;
    color: var(--text);
  }
  li {
    margin: 1rem auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--text);
  }
  a {
    color: var(--link);
  }
  #root {
    display: flex;
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
  .section {
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
      transition: transform 0.5s ease;
      object-fit: cover;
      height: 300px;
      width: 100%;
      box-sizing: border-box;
    }
    :hover img {
      transform: scale(1.05);
    }
  }
  .CookieConsent {
    width: 400px !important;
    bottom: 2rem !important;
    left: auto !important;
    right: 2rem !important;
    border-radius: 12px;
    justify-content: flex-end !important;
    box-shadow: rgb(0 0 0 / 16%) 0px 2px 4px !important;
  }
`;

const HeadContainer = styled.div`
  height: 81px;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
