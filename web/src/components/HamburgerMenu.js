import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import BurgerNavList from './BurgerNavList';

const HamburgerMenu = () => {
  const [menuActive, toggleMenu] = useState(false);

  // media query to hide buger via css
  const burgerWrapper = css`
    @media (min-width: 900px) {
      display: none;
    }
  `

  const burgerMenu = css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 100%;
    transition: height 0.5s;
    z-index: 1;
  `;

  const burgerMenuHidden = css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 0%;
    display: hidden;
    overflow: hidden;
    transition: height 0.5s;
  `;

  const logoHolder = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--headerHeight);
    img {
      height: 200px;
      margin: 0;
    }
  `;

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
    <div css={burgerWrapper}>
      <div onClick={() => { toggleMenu(!menuActive) }}>
        <Hamburger active={menuActive} />
      </div>
      <div css={menuActive ? burgerMenu : burgerMenuHidden}>
        <div onClick={() => { toggleMenu(!menuActive) }}>
          <Hamburger active={menuActive} />
        </div>
        <div css={logoHolder}>
          <Link to='/'>
            <Img
              fixed={fixed}
              style={{ margin: 'auto', display: 'flex' }}
            />
            {/* <img src='http://static1.squarespace.com/static/51a61f4be4b03e3c0127d234/t/55064988e4b0f9921cd75244/1572117101826/?format=1500w' alt='Joe Martone logo' /> */}
          </Link>
        </div>
        <div css={css`padding-top: 50px;`}>
          <BurgerNavList active={menuActive} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;