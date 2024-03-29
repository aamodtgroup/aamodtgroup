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
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/projects/"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/blog/"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="widget-list-link"
                                    link="/contact/"
                                >
                                    Contact
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
                        <h2 className="widget-title">Follow us</h2>
                        <ul className="widget-list">
                            <li>
                                <Link
                                    className="widget-list-link"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    link="https://twitter.com/aamodtgroup/"
                                >
                                    Twitter
                                </Link>
                            </li>
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
                        <h2 className="widget-title">Contact</h2>
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
                        <p className="copyright">© 2021 Aamodt Group &#124; <Link link="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=923248404" target="_blank">923 248 404 MVA</Link></p>
                    </div>
                    <div className="column2">
                        <p className="copyright">
                            <Link link="/privacy">Privacy</Link>
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
    width: 100%;
    max-width: 100%;
    justify-content: center;
    margin: 2rem;
    padding: 2rem;
    background-color: var(--headerbackground);
    border-radius: 25px;
    .footer-grid {
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
            color: #fff;
            margin-bottom: 0.5rem;
            font-size: var(--h6size);
            font-weight: 500;
        }
        .widget-list {
            list-style: none;
            padding-left: 0;
            li {
                margin: 0 !important;
                margin-bottom: 0.5rem;
                .widget-list-link {
                    color: #fff;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    &:hover {
                        color: var(--brand) !important;
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
        color: #fff;
    }
    .copyright a {
        font-size: 1rem;
        color: #fff;
    }
    @media screen and (max-width: 800px) {
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
        .copyright-grid {
            display: flex;
            flex-wrap: wrap;
        }
    }
`;