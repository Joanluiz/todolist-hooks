import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
  }
  #root{
    width: 100%;
  }
  :root{
    --ff-title: 'Montserrat', sans-serif;
    --fs-ordinary: 1rem;
    --colorone: #4E8BAD;
    --grape100: #a2678a38;
    --colortwo: #1D336C;
    --colorlist: #BEC5E1;
    --gray300: #00000015;
    @media (min-width: 450px){
      --fs-ordinary: 1.2rem;
    }
  }
  body {
    background-color: white;
    background-image: linear-gradient(120deg, var(--colorone) 0%, var(--colortwo) 70%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    margin: 0;
    font-family: sans-serif;
}
`;

export const Btn = styled.button`
	cursor: pointer;
	border: none;
	background: transparent;
	font-weight: bolder;
`;