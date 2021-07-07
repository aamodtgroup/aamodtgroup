import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';

const Footer = () => {
    return (
        <>
            <Container>
                <div className="footer-grid">
                    <div className="footer-widget">
                        <h2 className="widget-title">Sitemap</h2>
                        <ul className="widget-list">
                            <li>
                                <Link className="widget-list-link" link="/">
                                    Hjem
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/prosjekter/"
                                >
                                    Prosjekter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/blogg/"
                                >
                                    Blogg
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/kontakt-oss/"
                                >
                                    Kontakt oss
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h2 className="widget-title">Tech</h2>
                        <ul className="widget-list">
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://frontity.org/"
                                >
                                    Frontity
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://wordpress.org/"
                                >
                                    WordPress
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://github.com/aamodtgroup/"
                                >
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h2 className="widget-title">Følg oss</h2>
                        <ul className="widget-list">
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://www.linkedin.com/company/aamodtgroup/"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://www.facebook.com/aamodtgroup/"
                                >
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://www.instagram.com/aamodtgroup/"
                                >
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget">
                        <h2 className="widget-title">Kontakt</h2>
                        <ul className="widget-list">
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="mailto:hello@aamodtgroup.com"
                                >
                                    hello@aamodtgroup.com
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="tel:004745436986"
                                >
                                    +47 454 36 986
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-grid">
                    <div className="column1">
                        <p className="copyright">© 2021 Aamodt Group</p>
                    </div>
                    <div className="column2">
                        <p className="copyright">
                            <Link link="/personvern">Personvern</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`
    display: block;
    width: 85%;
    max-width: 1000px;
    justify-content: center;
    margin: 2rem auto;
    padding: 0;
    .footer-grid {
        padding-top: 50px;
        padding-bottom: 50px;
        margin-bottom: 0;
        display: flex;
    }
    .footer-widget {
        line-height: 24px;
        margin-bottom: 35px;
        width: 25%;
        @media (max-width: 800px) {
            width: 50%;
            text-align: center;
        }
        @media (max-width: 500px) {
            width: 100%;
            text-align: center;
        }
        .widget-title {
            color: white;
            margin-bottom: 0.5rem;
            font-size: var(--h6size);
            font-weight: 600;
        }
        .widget-list {
            list-style: none;
            padding-left: 0;
            li {
                margin: 0 !important;
                margin-bottom: 0.5rem;
                .widget-list-link {
                    text-decoration: none;
                    transition: all 0.3s ease;
                    color: white;
                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
    .copyright-grid {
        display: flex;
        justify-content: space-between;
    }
    .copyright {
        font-size: 1rem;
        margin: 1rem 0;
        color: white;
    }
    .copyright a {
        color: white;
        font-size: 1rem;
    }
    @media screen and (max-width: 800px) {
        padding: 0 15px;
        .footer-grid {
            display: flex;
            flex-wrap: wrap;
        }
        .footer-widget {
            :first-of-type {
                grid-column-start: 1;
                grid-column-end: 3;
            }
        }
        .footer-widget {
            :not(:first-of-type) {
                margin-left: 0;
            }
        }
    }
`;
