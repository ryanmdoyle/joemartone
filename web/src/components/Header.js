import React from "react"
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const headerStyles = css`
  height: calc(var(--headerHeight) + 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  #headerUpper {
    width: 100%;
    height: var(--headerHeight);
    display: flex;
    flex-direction: row;
  }
  #headerLower {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #logo, #leftNav, #rightNav {
    height: var(--headerHeight);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #logo {
    width: 250px;
  }
  #leftNav, #rightNav {
    width: calc(50% - 125px);
    visibility: hidden;
  }
  #leftNav > ul, #rightNav > ul {
      display: none;
    }
  /* WIDE NAV */
  @media (min-width: 1250px) {
    height: var(--headerHeight);
    #headerLower { display: none; }
    #leftNav, #rightNav { visibility: visible; }
    #leftNav > ul, #rightNav > ul {
      display: flex;
    }
    #leftNav { justify-content: end }
    #rightNav { justify-content: start }
  }
  /* MOBILE/BURGER NAV */
  @media (max-width: 900px) {
    height: var(--headerHeight);
    #headerLower { display: none; }
    #leftNav, #rightNav { visibility: hidden; }
    #leftNav > ul, #rightNav > ul {
      display: none;
    }
  }
`;

const navListStyles = css`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    margin: 0 1rem;
  }
`;

const Header = (props) => {
  const { file: { childImageSharp: { fixed } } } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "JoeMartoneLogo.png"}) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header css={headerStyles} {...props} >
      <div id='headerUpper'>
        <div id='leftNav'>
          <ul css={navListStyles}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/bio'>Bio</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/instruments'>Instruments</Link></li>
          </ul>
        </div>
        <div id='logo'>
          <Link to='/'>
            <Img
              fixed={fixed}
              style={{ margin: 'auto', display: 'flex' }}
            />
          </ Link>
        </div>
        <div id='rightNav'>
          <ul css={navListStyles}>
            <li><Link to='/lessons'>Lessons</Link></li>
            <li><Link to='/media'>Media</Link></li>
            <li><Link to='/contracting'>Contracting</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div id='headerLower'>
        <div id='wideNav'>
          <ul css={navListStyles}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/bio'>Bio</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/instruments'>Instruments</Link></li>
            <li><Link to='/lessons'>Lessons</Link></li>
            <li><Link to='/media'>Media</Link></li>
            <li><Link to='/contracting'>Contracting</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </header >
  )
};

export default Header
