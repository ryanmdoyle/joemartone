import React from 'react';
import { css } from '@emotion/core';

import '../styles/hamburger.css';

const burgerStyles = css`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  .hamburger {
    transform: scale(0.8);
  }
  .hamburger-inner {
    color: white;
  }
`;

const Hamburger = ({ active }) => {
  const isActive = active ? 'is-active' : '';
  return (
    <div css={burgerStyles}>
      <button className={`hamburger hamburger--spin ${isActive}`} type="button" aria-label='toggle mobile navigation menu'>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;