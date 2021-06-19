import React from "react";
import { connect, styled } from "frontity";
import dayjs from "dayjs";
import Link from "../link";
import postimage from "../../images/agtechcard.png";
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  
  // Get a human readable date.
  const date = dayjs(item.date).format("DD. MMM");
  // Get the data of the author.
  const author = state.source.author[item.author];

  if(item.featured_media) {
    var featuredImage = state.source.attachment[item.featured_media].source_url;
  } else {
    var featuredImage = postimage;
  }

  

  return (
    <>
      <Article className="ag-card">
        {/* <Link link={item.link}> */}
          <div className="image">
            <img src={featuredImage}/>
          </div>
          <div className="post-info">
            <p>{date}</p>
            <div className="ag-title">
              <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </div>
            <div className="author-category">
              <div className="author-grid">
                <img src={author.avatar_urls[48]} />
                <Link link={author.link} className="author-name"><p className="author-name">{author.name}</p></Link>
              </div>
            </div>
          </div>
        {/* </Link> */}
      </Article>
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  background-color: #f2f5f7;
  width: 100%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease 0s;
  .image {
    position: relative;
    margin-bottom: 1rem;
  }
  .image img {
    object-fit: cover;
    height: 144px;
    object-position: center center;
    width: 100%;
  }
  .post-info {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    h2 {
      font-size: 1rem;
    }
  }
  .author-category {
    padding-top: 24px;
    margin-top: auto;
  }
  .author-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: minmax(0px, max-content) 1fr;
    margin-bottom: 8px;
    text-decoration: none;
    border-radius: 8px;

    .author-name {
      margin: auto 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-left: 10px;
  box-sizing: border-box;
`;
