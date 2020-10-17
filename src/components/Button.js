import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
font-family: 'Libre Baskerville', serif;
background: transparent;
border:0.1rem solid var(--mainEggshell);
border-color: ${props =>
props.cart ? "var(--mainDarkBrown)" : "var(--mainEggshell)"};
color: ${prop => prop.cart? "var(--mainDarkBrown)" : "var(--mainEggshell)"};
border-radius: 0.5rem;
padding: 0.rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0; 
transition:all 0.5s ease-in-out;
&:hover{
    background: ${prop => prop.cart? "var(--mainDarkBrown)" : "var(--mainEggshell)"};
    color: ${prop => prop.cart? "var(--mainPeach)" : "var(--mainPeach)"};;
}
&:focus{
    outline: none;
}
`;