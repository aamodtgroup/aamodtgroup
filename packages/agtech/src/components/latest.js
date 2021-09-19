import React, { useEffect } from "react";
import { connect, styled } from 'frontity';
import postimage from '../images/agtechcard.png';
import Link from "@frontity/components/link";


const LatestPost = ({ state, actions }) => {
    useEffect(() => {
        // No need to use `async/await` here
        actions.source.fetch("/blog/frontity-gravity-forms-package-and-why-i-love-to-make-packages/");
    }, []);
    
    const latest = state.source.get("/blog/frontity-gravity-forms-package-and-why-i-love-to-make-packages/");


    if (latest.isReady) {
        const post = state.source.blog[latest.id];
        if (post.featured_media) {
            var featuredImage =
                state.source.attachment[post.featured_media].source_url;
        } else {
            var featuredImage = postimage;
        }
        return (
            <Card>
                <Link link={post.link}>
                    <img src={featuredImage}/>
                    <div className="card_content">
                        <h2>{post.title.rendered}</h2>
                    </div>
                </Link>
            </Card>
        )
    } else {
        return null;
    }
};

export default connect(LatestPost);

const Card = styled.div`
    display: block;
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px;
    width: 300px;

    img {
        height: 300px;
        width: 300px;
        object-fit: contain;
    }

    .card_content {
        padding: 1rem;
    }

    h2 {
        font-size: 1rem;
        color: #000;
    }
`;
