import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const listStylesActive = css`
  width: 100%;
  display: flex;
  opacity: 1;
  flex-direction: column;
  transition: opacity 0.5s ease-in-out 0.2s;
`;

const listStylesHidden = css`
  width: 100%;
  display: flex;
  opacity: 0;
  flex-direction: column;
  transition: opacity 0.5s ease-in-out;
`;

const listStyles = css`
  list-style: none;
  margin: 0;
  li {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    text-transform: uppercase;
  }
`;

const BurgerNavList = ({ active }) => {
  return (
    <div css={active ? listStylesActive : listStylesHidden}>
      <ul css={listStyles}>
        <li>Bio</li>
        <li>Resume</li>
        <Link to='/instruments'><li>Instruments</li></Link>
        <li>Lessons</li>
        <li>Media</li>
        <li>Contracting</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default BurgerNavList;