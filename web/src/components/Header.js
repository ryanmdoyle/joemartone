import React from "react"
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import NavRow from './NavRow';

const headerStyles = css`
  width: 100%;
  height: calc(var(--headerHeight) + 50px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  #logo {
    width: 100%;
    height: 50%;
    order: 1
  }
  #links1 {
    order: 2;
    flex-grow: 1;
    height: 40px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  #links2 {
    order: 3;
    flex-grow: 1;
    height: 40px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  /* Large Screens */
  @media (min-width: 1100px){
    height: var(--headerHeight);
    flex-wrap: nowrap;
    #logo { 
      order: 2;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #links1 {
      order: 1;
      height: var(--headerHeight);
      justify-content: center;
    }
    #links2 {
      order: 3;
      height: var(--headerHeight);
      justify-content: center;
    }
  }
  /* Small Mobile */
  @media (max-width: 800px) {
    height: var(--headerHeight);
    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #links1, #links2 {
      display: none;
    }
  }
`;

// this is also in BurgerNavList, move to external if ok
const listStyles = css`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    color: white;
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

  console.log('logo query', fixed);
  return (
    <header css={headerStyles} {...props} >
      <div id='logo'>
        <Link to='/'>
          <Img
            fixed={fixed}
            style={{ margin: 'auto', display: 'flex' }}
          />
        </ Link>
      </div>

      <div id='links1'>
        <ul css={listStyles} >
          <li>Home</li>
          <li>Bio</li>
          <li>Resume</li>
          <li>Instruments</li>
        </ul>
      </div>

      <div id='links2'>
        <ul css={listStyles} >
          <li>Lessons</li>
          <li>Media</li>
          <li>Contracting</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* <NavRow>
        <li>Lessons</li>
        <li>Media</li>
        <li>Contracting</li>
        <li>Contact</li>
      </NavRow> */}
    </header >
  )
};

export default Header
