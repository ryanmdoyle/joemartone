import React from 'react';
import { css } from '@emotion/core';

const form = css`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  label, button {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 0 0.4rem 0;
  }
  input, textarea, button {
    padding: 0.4rem;
    margin-bottom: 0.5rem;
    background-color: white;
    transition: background-color 0.5s, height 1s;
    border: 1px solid #222;
    height: 2rem;
  }
  input:focus, textarea:focus, button:focus {
    background-color: white;
    transition: background-color 0.5s, height 1s;
    border: 2px solid #333;
    outline: none;
    border-radius: 0.1rem;
  }
  textarea:focus {
    height: 8rem;
  }
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.1rem;
    transition: box-shadow 0.3s;
  }
  .container:focus-within {
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
    transition: box-shadow 0.3s;
  }
  #submit {
    background-color: black;
    color: white;
    margin: 1rem;
    height: 3rem;
  }
  #submit:hover {
    color: black;
    font-weight: 700;
    background-color: white;
    border: 2px solid black;
  }
`;

const ContactForm = () => {
  return (
      <form css={form} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className='container'>
          <label for="first-name">First Name *</label>
          <input type='text' name='first-name' required></input>
        </div>

        <div className='container'>
          <label for="last-name">Last Name *</label>
          <input type='text' name='last-name' required></input>
        </div>

        <div className='container'>
          <label for="email">Email Address *</label>
          <input type='email' name='email' required></input>
        </div>

        <div className='container'>
          <label for="subject">Subject *</label>
          <input type='text' name='subject' required></input>
        </div>

        <div className='container'>
          <label for="message">Message *</label>
          <textarea type='text' name='mssage' required></textarea>
        </div>
        <p css={css`margin-left: 1rem;`}>* required field</p>
        <button id='submit' type='submit'>Submit</button>
      </form>
  );
};

export default ContactForm;