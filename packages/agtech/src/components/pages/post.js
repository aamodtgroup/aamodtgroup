import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import List from "../list";
import dayjs from "dayjs";
import postimage from "../../images/agtechcard.png";

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

  const categoryId = post.categories;
  if ( categoryId.length !== 0 ) {
    var category = state.source.category[categoryId].name;
    var categorylink = state.source.category[categoryId].link;
  } else {
    var category = "Blogg";
    var categorylink = "/blogg/";
  };

  if(post.featured_media) {
    var featuredImage = state.source.attachment[post.featured_media].source_url;
  } else {
    var featuredImage = postimage;
  };

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
        <div className="title-excerpt">
          <div>
            <p className="date"><span>{date}</span> - <Link link={categorylink}><span className="capitalize">{category}</span></Link></p>
            {/* {post.categories.map((categoryId) => {
              const category = state.source.category[categoryId];
              return <Link link={category.link}>{category.name}</Link>;
            })} */}
            <h1><Html2React html={post.title.rendered} /></h1>
            <div className="excerpt"><Html2React html={post.excerpt.rendered} /></div>
          </div>
        </div>
        <div className="image">
          <img src={featuredImage} />
        </div>
      </Header>

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
  width: 100%;
  max-width: 1000px;
  padding: 2rem 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);

  .excerpt {
    p {
      font-family: Baskervville, sans-serif; 
    }
  }

  .title-excerpt {
    display: flex;
    align-items: center;
  }

  .image {
    height: 350px;
    width: 350px;
    border-radius: 15px;
    overflow: hidden;
    margin: auto;
    box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  
    img {
      width: 350px;
      height: 350px;
      object-fit: cover;
      transition: all 1s ease;
    }
  }

  .date span {
    font-size: .9rem;
    border-bottom: 2px solid var(--brand);
  }

  span {
    color: var(--text);
  }

  .capitalize {
    text-transform: capitalize;
  }

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
    .image {
      width: 300px;
      height: 300px;

      img {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1,1fr);
    .image {
      margin-top: 2rem;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

const Content = styled.div`
  word-break: break-word;
  padding: 2rem 0;
  * {
    max-width: 650px;
    width: 100%;
    margin: 2rem auto;

    img {
      margin: 0;
    }
  }

  .wp-block-image.alignwide {
    max-width: 850px;
    span {
      max-width: 850px;
    }
  }

  p:first-of-type {
    margin-top: 0;
  }
  p, h1, h2, h3, h4, h5, h6, li {
    font-family: Baskervville, sans-serif; 
  }

  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.5rem;
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
