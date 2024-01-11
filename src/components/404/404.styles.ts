import styled from 'styled-components';

export const StyledNotFountPage = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: sans-serif;
  background-color: #ffffff;
  padding: 4rem 2rem;
  h1 {
    font-size: 150px;
    color: #1e1e1ec2;
    text-shadow: 
      1px 1px 1px #66666636,    
      2px 2px 1px #66666636,
      3px 3px 1px #66666636,
      4px 4px 1px #66666636,
      5px 5px 1px #66666636,
      6px 6px 1px #66666636,
      7px 7px 1px #66666636,
      8px 8px 1px #66666636,
      25px 25px 8px rgba(0,0,0, 0.2);
  }
  p {
    margin: 2rem 0;
    font-size: 20px;
    font-weight: 600;
    color: #444;
  }
  button {
    display: inline-block;
    border: 2px solid #222;
    color: #222;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.75rem 1rem 0.6rem;
    transition: all 0.2s linear;
    box-shadow: 0 3px 8px rgba(0,0,0, 0.3);
    &:hover{
        background: #222;
        color: #ddd;
    }
  }
`;
