import styled from "styled-components";

const Button = styled.button`
  border:none; font-weight:900; display: block;
  background: ${props => props.white ? `transparent` : props.theme.brightBlue};
  width: ${props => props.white ? `auto` : "100%"};
  color: ${props => props.white ? props.theme.desaturatedBlue : `white`};
  margin: ${props => props.white && "32px auto 0"};
  padding: ${props => props.white && "0px"};
  box-shadow: ${props => props.white ? "none" : `0px 20px 18px hsl(245deg 75% 52% / 15%);`};
  will-change: transition;
  transition: 0.2s;
  &:hover{
    background: ${props => props.white ? `transparent` : props.theme.desaturatedBlue};
    color: ${props => props.white ? props.theme.darkBlue : "white"};
  }

  @media(max-width:465px){
    margin:${props => props.white && "22px auto 0"};
  }
`


export default Button;