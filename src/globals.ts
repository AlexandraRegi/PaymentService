"use client"
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: #E5E6EA;
  }
  body {
    height: 100vh;
    width: 100vw;
  }
  body, h1, h2 {
    margin: 0;
    padding: 0;
    font-family: var(--font-montserrat);
    display: flex;
    justify-content: center;
  }
  h1, h2, h3, p {
    color: #383D49;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 500;
    color: #07ae79;
    margin: 1rem;
    @media screen and (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 0;
    }
    @media screen and (max-width: 350px) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    height: 100vh;
    width: 100vw;
  }
`
