import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import dayjs from "dayjs";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get a human readable date.
  const date = dayjs(post.date).format("DD.MM.YYYY");
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <ArticleContainer>
      <Header>
        <div className="blog-header-inner">
          <h1>{post.title.rendered}</h1>
          <div>
            <DateWrapper>
              {" "}
              <b>{date}</b>
            </DateWrapper>
          </div>
        </div>
      </Header>

      {post.hero_image && (
        <BlogHero>
          <div className="blog-hero-inner">
            <img src={post.hero_image} />
          </div>
        </BlogHero>
      )}

      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </ArticleContainer>
  ) : null;
};

export default connect(Post);

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: inherit;
`;

const Header = styled.div`
  padding: 2rem 0;
  text-align: center;

  .blog-header-inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 64px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 40px;
    }
    .blog-header-inner {
      padding: 0 15px;
    }
  }
`;

const BlogHero = styled.div`
  padding: 2rem 0;
  text-align: center;
  background: linear-gradient(0deg, var(--postbackground) 50%, var(--background) 50%);
  transition: background 1s;

  .blog-hero-inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 12px;

    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      transition: height 1s ease;
    }
  }
  @media (max-width: 1000px) {
    .blog-hero-inner {
      border-radius: 0;

      img {
        height: 325px;
        border-radius: 12px;
      }
    }
  }
  @media (max-width: 600px) {
    .blog-hero-inner {
      img {
        height: 200px;
      }
    }
  }
  @media (max-width: 1230px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 1em;
  display: inline;
  text-transform: capitalize;
`;

const DateWrapper = styled.p`
  font-size: 1em;
  display: inline;
`;

const Content = styled.div`
  background: var(--postbackground);
  word-break: break-word;
  padding: 2rem 0;
  * {
    max-width: 650px;
    width: 100%;
    margin: 2rem auto;
  }
  p:first-of-type {
    margin-top: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    // width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: 0 auto;
  }

  blockquote {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  .wp-block-embed {
    max-width: 100%;
    position: relative;
    width: 100%;
    margin: 1.5rem auto;
    .wp-block-embed__wrapper {
      &::before {
        content: "";
        display: block;
      }
    }
    iframe {
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
    }
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  @media (max-width: 900px) {
    padding: 1rem 15px;
  }
`;