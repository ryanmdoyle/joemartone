import React from 'react';
import { css } from '@emotion/core';

const PageTitle = ({ title }) => {
  return (
    <>
      <h2 css={css`text-align:center;`}>
        {title}
      </h2>
      <hr></hr>
    </>
  );
};

export default PageTitle;