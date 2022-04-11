import styled from 'styled-components';

export const Container = styled.div `
   display: flex;
   background-color: #EEE;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const Card = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  margin: 10px;
  height: 250px;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
`;


export const CardTitle = styled.h1`
  color: #333;
  font-size: 40px;
`

export const Quantity = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #333;
  font-size: 60px;
`
