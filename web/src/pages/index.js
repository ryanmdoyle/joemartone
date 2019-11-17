import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div css={css`max-height: 500px;`}>
      {/* <Image /> */}
      {/* just make the main image a background image */}
    </div>

  </Layout>
)

export default IndexPage
