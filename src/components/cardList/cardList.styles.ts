import styled from 'styled-components';

export const StyledCardList = styled.div`
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  height: 400px;
  width: 1000px;
  justify-content: center;
  @media screen and (max-width: 880px) {
    width: 100vw;
  }
`
export const StyledCardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  width: 450px;
  background: white;
  border-radius: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: rom;
  justify-content: space-between;
  align-items: stretch;
  @media screen and (max-width: 480px) {
    width: 80vw;
  }
`
