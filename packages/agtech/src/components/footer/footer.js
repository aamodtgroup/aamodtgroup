import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import logo from "../../images/logo.png";
import Script from "@frontity/components/script"
//import Mailchimp from "./newsletter";

 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        {/* <div className="newsletter-container">
          <div className="form-text-container">
            <h4>Bli med i HostWP-nyhetsbrevet</h4>
            <p>Hold deg oppdatert på nye utgivelser og funksjoner, veiledninger og nyheter.</p>
          </div>
          <div className="form-container">
            <div className="newsletter-form">
              <Mailchimp />
            </div>
          </div>
        </div> */}
        <hr className="divider div1" />
        <div className="footer-grid">
          <div className="footer-widget">
            <img src={logo} alt="logo" width="150px" height="50px" />   
            <div id="wcb" className="carbonbadge"></div>
            <Script src="https://unpkg.com/website-carbon-badges@1.1.1/b.min.js" defer></Script>         
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Tjenester</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/">Link 1</Link></li>
              <li><Link className="widget-list-link" link="/">Link 2</Link></li>
              <li><Link className="widget-list-link" link="/">Link 3</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Sitemap</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/">Hjem</Link></li>
              <li><Link className="widget-list-link" link="/blogg/">Blogg</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Tech</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://frontity.org/">Frontity</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://wordpress.org/">WordPress</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://github.com/">GitHub</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4 className="widget-title">Follow us</h4>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com/">Facebook</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com/">Twitter</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <hr className="divider div2" />
        <div className="copyright-grid">
          <div className="column1">
            <p className="copyright">© 2021 Aamodt Group</p>
          </div>
          <div className="column2">
            <p className="copyright"><Link link="/personvern">Personvern</Link></p>
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
  width:100%;
  max-width:1200px;
  justify-content:center;
  margin: 0 auto;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color:#0077b5;
  #wcb {
    --b1: #0077b5;
    --b2: #000;
    text-align: left;
    margin-top: 1rem;
  }
  .footer-grid {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 0.8fr repeat(4,auto);
  }
  .footer-widget {
    line-height: 24px;
    margin-bottom: 35px;
    :not(:first-of-type) {
      margin-left: 32px;
    }
    .widget-title {
      color:#0077b5;
      margin-bottom:.5rem;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      font-size:16px;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin: 0 !important;
        margin-bottom: 0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:#000;
          font-size: 16px;
          &:hover {
            color:var(--brand);
          }
        }
      }
    }
  }
  .divider {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    margin: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }
  .copyright-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .column2 {
    text-align: right;
  }
  .copyright {
    font-size: 14px;
    margin: 1rem 0;
    color: #333;
  }
  .copyright a {
    color: #333;
  }
  .form-text-container {
    margin: 0px;
    width: 100%;
  }
  .form-text-container h4 {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
  .form-text-container p {
    font-size: 14px;
    line-height: 20px;
    color: rgba(15,28,100,0.8);
  }
  .newsletter-container {
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: flex;
    margin: 50px auto;
  }
  .form-container {
    width: 100%;
  }
  .newsletter-form {
    margin-left: auto;
    max-width: 400px;
  }
  .newsletter {
    width: 100%;
    height: 50px;
    padding: 3px;
    display: grid;
    // grid-template-rows: repeat(1,auto);
    grid-template-columns: auto auto;
    // row-gap: .5rem;
    border: 1px solid rgba(12,17,43,0.08);
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgb(12 17 43 / 12%);
  }
  .newsletter input {
    width: 100%;
    padding-left: 16px;
    padding-right: 6px;
    border: none;
    background: transparent;
    font-size: 16px;
    line-height: 24px;
    color: rgba(15,28,100,0.8);
    margin: 0;
  }
  .newsletter button {
    position: static;
    background-color: #0077b5;
    color: #ffffff;
    line-height: 16px;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 4px 8px 0 rgb(12 17 43 / 12%), 0 1px 4px 0 rgb(12 17 43 / 16%);
  }
  .msg-alert {
    display: none;
  }
  @media screen and (max-width: 800px) {
    padding: 20px 15px;
    .footer-grid {
      display: grid;
      grid-template-rows: auto repeat(3,auto);
      grid-template-columns: 1fr 1fr;
      padding-top: 25px;
      padding-bottom: 0px;
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
    .newsletter-container {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
`;
