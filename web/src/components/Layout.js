import React, { useEffect } from "react";
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
    padding: 0 50px;
    padding-bottom: 125px;
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
      {/* {(location.pathname === '/') ? <Footer css={footerOnIndex} /> : <Footer />} */}
      <Footer css={fixedFooter} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
