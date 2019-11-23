import React from "react"
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const headerStyles = css`
  width: 100%;
  height: 100px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
  overflow: hidden;
  #logo {
    width: 100%;
    order: 1
  }
  #links1 {
    order: 2;
    background-color: green;
    flex-grow: 1;
  }
  #links2 {
    order: 3;
    background-color: red;
    flex-grow: 1;
  }
  @media (min-width: 1000px){
    #logo { 
      order: 2;
      width: 300px;
    }
    #links1 {order: 1;}
    #links2 {order: 3;}
  }
`;

// this is also in BurgerNavList, move to external if ok
const listStyles = css`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row; 
  li {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
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
          <Img fixed={fixed} style={{ margin: 'auto', display: 'flex' }} />
        </ Link>
      </div>

      <div id='links1'>links</div>

      <div id='links2'>links 2</div>

    </header >
  )
};

export default Header
