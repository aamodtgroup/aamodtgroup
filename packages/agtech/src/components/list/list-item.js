import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import postimage from '../../images/agtechcard.png';
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
    if (item.featured_media) {
        var featuredImage =
            state.source.attachment[item.featured_media].source_url;
    } else {
        var featuredImage = postimage;
    }

    const categoryId = item.categories;
    if ( categoryId.length !== 0 ) {
        var categories = [];
        categoryId.forEach( item => {
            categories.push(state.source.category[item].name);
        })
    };

    return (
        <>
            <Article className="ag-card">
                <Link link={item.link}>
                    <div className="ag-image">
                        <img src={featuredImage} />
                    </div>
                    <div className="card-content">
                        <div className="ag-categories">
                            {categories && categories.map((category, i) => (
                                <div class="ag-category">
                                    <span key={i} className="capitalize">{category}</span>
                                </div>
                            ))}
                        </div>
                        <div className="ag-title">
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.title.rendered,
                                }}
                            />
                        </div>
                    </div>
                </Link>
            </Article>
        </>
    );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
    .image {
        overflow: hidden;
        height: 300px;
        width: 100%;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    .image img {
        transition: transform 0.5s ease;
        object-fit: cover;
        height: 300px;
        width: 100%;
    }
`;
