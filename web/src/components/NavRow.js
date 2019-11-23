import React from 'react';
import { css } from '@emotion/core';

const navRowStyles = css`
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

const NavRow = (props) => {
  return (
    <nav css={css`width: 100%;`}>
      <ul css={navRowStyles}>
        {props.children}
      </ul>
    </nav>
  );
};

export default NavRow;