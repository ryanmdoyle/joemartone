/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';

import Header from "./Header";
import Footer from './Footer';
import "../styles/layout.css";
import HamburgerMenu from "./HamburgerMenu";

const Layout = ({children, location}) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mainStyles = css`
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 50px;
  `;

  const footerOnIndex = css`
    position: absolute;
    bottom: 0;
    left: 0;
  `;

  return (
    <>
      { (location.pathname === '/') ? <Header siteTitle={data.site.siteMetadata.title}/> : <Header siteTitle={data.site.siteMetadata.title} css={css`background-color: black;`}/> }
      <HamburgerMenu />
      <main css={mainStyles}>
        {children}
      </main>
      { (location.pathname ==='/') ? <Footer css={footerOnIndex} /> : <Footer /> }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
