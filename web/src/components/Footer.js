// import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core';

import SocialLinks from './SocialLinks';

const footerStyles = css`
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Footer = (props) => {
  // const [screenWidth, setScreenWidth] = useState(0);
  // useEffect(() => {
  //   window.addEventListener('resize', () => { setScreenWidth(window.innerWidth) })
  //   console.log(screenWidth);
  // })

  return (
    <footer css={footerStyles} {...props}>
      <SocialLinks />
    </footer>
  )
}

export default Footer
