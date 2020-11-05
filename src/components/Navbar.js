import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm 
            navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        <i class="fas fa-bars fa-lg"></i>
                    </Link>
                    </li>
                </ul>
                <Link to='/' className="ml-auto">
                    <span className="mr-2">
                    E-Commerce Site
                    </span>

                </Link>
                <Link to='/cart' className="ml-auto">
                    <span className="mr-2">
                    <i className = "fas fa-cart-plus fa-lg" />
                    </span>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainWhite);
.nav-link{
    color:var(--mainDark)!important;
    font-size: 1.7rem;
    font-family: 'Libre Baskerville', serif;
    text-transform: capitalize;
}
.ml-auto{
    color:var(--mainDark)!important;
    margin: 2rem 0.5rem 2rem 0; 
    font-size: 1.7rem;
    font-family: 'Libre Baskerville', serif;
    text-transform: capitalize;
    text-decoration: none;  
    &:hover{
        color:var(--darkGrey)!important;
    }
}

`