import React from "react"
import { css } from '@emotion/core';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import background from "../images/JoeMartone-50.jpg";

const indexStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const IndexPage = () => {
  return (
    <Layout location='/' >
      <SEO title="Home" />
      <div css={indexStyles}></div>
    </Layout>
  )
}
export default IndexPage
