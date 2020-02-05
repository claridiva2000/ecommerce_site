import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid #288DE9;
border-color:  ${props=>props.cart? '#FFAA30': '#288DE9' };
color:${props=>props.cart? '#FFAA30': '#288DE9' } ;
border-radius: .5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:.2rem .5rem 0
transition:all 0.5s ease-in-out;
&:hover{
  background:${props=>props.cart? '#FFAA30': '#288DE9' };
  color: #573FA5
}
&:focus{
  outline:none;
}
`;