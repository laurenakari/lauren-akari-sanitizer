import styled from 'styled-components'


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.2rem;
background: transparent;
border: none;
background-color: ${props =>
props.cart ? "var(--mainDark)" : "var(--mainDark)"};
color: ${prop => prop.cart? "var(--mainWhite)" : "var(--mainWhite)"};
padding: 5px 30px 5px 25px;
cursor: pointer;
margin: 0.5rem 0.5rem 0.2rem 0; 
transition:all 0.5s ease-in-out;
&:hover{
    background: ${prop => prop.cart? "var(--mainDark)" : "var(--mainDark)"};
    color: ${prop => prop.cart? "var(--regularGrey)" : "var(--regularGrey)"};;
}
&:focus{
    outline: none;
}
`;