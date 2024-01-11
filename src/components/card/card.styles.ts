import styled from 'styled-components';

export const Logo = styled.div`
  height: 60%;
  margin: 5px;
  img {
    width: fit-content;
    max-width: 150px;
    max-height: 150px;
    @media screen and (max-width: 480px) {
      max-width: 100px;
      max-height: 100px;
    }
    @media screen and (max-width: 350px) {
      max-width: 50px;
      max-height: 50px;
    }
  }
`
export const Info = styled.div`
  margin:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0;
    @media screen and (max-width: 350px) {
      font-size: 14px;
    }
  }
  p {
    font-size: 14px;
    color: #A0A5B3;
    @media screen and (max-width: 350px) {
      font-size: 12px;
    }
  }
  button {
    position: relative;
    width: 190px;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, #2DC066, #07ae79);
    font-size: 16px;
    color: white;
    border-radius: 5px;
    padding: 10px 18px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(146, 148, 248, 0.4),
        transparent
      );
      transition: all 650ms;
    }
    &:hover:before {
      left: 100%;
    }
    @media screen and (max-width: 480px) {
      width: 180px;
      font-size: 14px;
    }
    @media screen and (max-width: 350px) {
      width: 160px;
      font-size: 12px;
    }
  }
`
