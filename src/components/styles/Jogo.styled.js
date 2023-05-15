import styled from "styled-components";

export const StyledJogo = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1025px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 59px;
  position: relative;
  

  img {
    width: 400px;
    height: 467px;
    margin-top: 59px;
    margin-left: 38px;
    
  }

  button {
    width: 200px;
    height: 60px;
    margin-top: 89px;
    margin-right: 53px;
    border-radius: 8px;
    background-color: #27ae60;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    font-family: "Roboto";
    cursor: pointer;
  }

  .word {
    position: absolute;
    height: 68px;
    bottom: 0;
    right: 0;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 53px;
    color: #000000;
  }
`;
