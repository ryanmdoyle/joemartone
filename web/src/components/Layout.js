import React from "react";
import PropTypes from "prop-types"
import { css } from '@emotion/core';

import Header from "./Header";
import Footer from './Footer';
import "../styles/layout.css";
import HamburgerMenu from "./HamburgerMenu";

const Layout = ({ children, location }) => {

  const mainStyles = css`
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;
    padding-bottom: 125px;
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  `;

  const fixedFooter = css`
    position: fixed;
    bottom: 0;
  `;

  return (
    <>
      {(location === '/') ? <Header /> : <Header css={css`background-color: black;`} />}
      <HamburgerMenu />
      <main css={mainStyles}>
        {children}
      </main>
      <Footer css={fixedFooter} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
