import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import postimage from '../../images/agtechcard.png';
import dayjs from 'dayjs';
/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
    const date = dayjs(item.date).format('MMMM D, YYYY');

    if (item.featured_media) {
        var featuredImage =
            state.source.attachment[item.featured_media].source_url;
    } else {
        var featuredImage = postimage;
    }

    const categoryId = item.categories;
    if ( categoryId.length !== 0 ) {
        var categories = [];
        categoryId.forEach( post => {
            var cat_data = {
                name: state.source.category[post].name,
                link: state.source.category[post].link
            };
            console.log(cat_data);
            categories.push(cat_data);
        })
    };

    return (
        <>
            <Article className="ag-card">
                    <div className="ag-image">
                        <img src={featuredImage} />
                    </div>
                    <div className="card-content">
                        <div className="ag-categories">
                            {categories && categories.map((category, i) => (
                                <div class="ag-category">
                                    <Link key={i} link={category.link} className="cat-link">
                                        {category.name}
                                    </Link>
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
                        <div className="ag-date">
                            <p>{date}</p>
                        </div>
                    </div>
                    <Link link={item.link} className="ag-link"></Link>
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
