import styled from 'styled-components';

export const StyledPaymentForm = styled.div`
position: sticky;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`
export const FormContainer = styled.form`
  position: relative;
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px 30px 30px;
  display: grid;
  justify-content: center; 
  justify-items: center; 
  align-items: center; 
  max-width: 600px;
  gap: 10px;
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
  @media screen and (max-width: 350px) {
    max-width: 250px;
  }
`
export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`
export const MobileOperator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  gap: 10px;
  color: #383D49;
  @media screen and (max-width: 480px) {
    width: 250px;
    font-size: 16px;
  }
  @media screen and (max-width: 350px) {
    max-width: 200px;
    font-size: 14px;
  }
  img {
    background-position: 50% 50%;
    background-size: cover;
    border: 1px solid transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`
export const Input = styled.input`
border-radius: 10px;
background-color: #ffffff;
width: 500px;
caret-color: #030303;
font-size: 16px;
line-height: 20px;
color: #1a1a1a;
padding: 10px 20px;
margin-top: 10px;
border: 1px solid lightgrey;
outline: none;
&.error {
  border-color: red;
}
@media screen and (max-width: 480px) {
  width: 250px;
}
@media screen and (max-width: 350px) {
  max-width: 200px;
}
`;
export const Error = styled.span`
  padding-left: 5px;
  font-size: 14px;
  width: 500px;
  color: dimgrey;
  @media screen and (max-width: 480px) {
    width: 250px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    max-width: 200px;
    font-size: 10px;
  }
`
export const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 190px;
  border: none;
  cursor: pointer;
  background-color: #07ae5a;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  padding: 10px 18px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  &hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }
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
`
