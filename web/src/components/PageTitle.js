import React from 'react';
import { css } from '@emotion/core';

const PageTitle = ({ title }) => {
  return (
    <>
      <h2 css={css`text-align:center;`}>
        <title css={css`all: inherit`}>{title}</title>
      </h2>
      <hr></hr>
    </>
  );
};

export default PageTitle;