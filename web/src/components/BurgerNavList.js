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
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bio'>Bio</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/instruments'>Instruments</Link></li>
        <li><Link to='/lessons'>Lessons</Link></li>
        <li><Link to='/media'>Media</Link></li>
        <li><Link to='/contracting'>Contracting</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default BurgerNavList;