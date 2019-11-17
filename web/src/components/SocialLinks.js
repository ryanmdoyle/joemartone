import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutubeSquare,
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { css } from '@emotion/core';

const styledLinks = css`
  display: flex;
  align-items: center;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0 0.6rem;
    margin: 0;
    color: white;
    transition: transform 0.15s;
  }
  li:hover {
    transform: scale(1.1);
    transition: transform 0.15s;
  }
  a {
    color: white;
    transition: color 0.15s;
  }
  a:hover {
    color: white;
    transition: color 0.15s; 
  }
 `;

const SocialLinks = () => {
  return (
    <div css={styledLinks} >
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.youtube.com/channel/UCkKfmNHqGVXBDVpKg9R6CEg'>
            <FontAwesomeIcon icon={faYoutubeSquare} size='2x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.facebook.com/703467752'>
            <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.instagram.com/joemartone/'>
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://twitter.com/j_martone'>
            <FontAwesomeIcon icon={faTwitterSquare} size='2x' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://www.linkedin.com/in/joe-martone-47655340/'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;