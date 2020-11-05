import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import{ProductConsumer} from "../context"; 
import PropTypes from 'prop-types';

export default class Product extends Component {
    render(){
        const{
            id, 
            title, 
            img, 
            img5,
            price, 
            inCart
        } = this.props.product;
        return(
            <ProductWrapper className="col-11 mx-auto col-md-6 col-lg-3 
            my-3">

                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                <div 
                className="img-container"
                onClick={() =>
                    value.handleDetail(id)
                }
                >

                <Link to= "/details">
                <img src={img} alt="product" className="card-img-top"/>
                </Link>
                
                {/*first button */}
                <button 
                className="cart-btn" 
                disabled={inCart ? true:false} 
                onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                }}
                >
                    {inCart?(
                <p className="text-capitalize mb-0" 
                disabled={inCart ? true:false} 
                onClick={() => {
                    value.removeItem(id);
                    value.openModal2(id);
                }}
                >
                    {" "}
                    <i className="fas fa-minus-circle"/>
                    </p>):(<i className="fas fa-plus-circle"/>
                    )}
                </button>
                
                </div>
                )}
                    </ProductConsumer>

                {/*cart footer */}
                <div className= ".card-footer">
                    <p className="align-self-center mt-3 mb-2 ml-3">
                        {title}
                        <img src={img5} alt="product" className="card-img-top2"/>
                    </p>
                    <ProductConsumer>
                        {(value) => (
                            <div 
                                className="img-container align-self-center p-3 mt-3 mb-3 ml-4"
                                onClick={() =>
                                value.handleDetail(id)
                        }
                    >

                    <button 
                        className="cart-btn-2" 
                            disabled={inCart ? true:false} 
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                        }}
                    >
                        {inCart?(
                         <div className="cart-added" disabled>
                            {" "}
                                <Link className="cart-style"
                                    to ="/cart">
                                        View Cart
                                </Link>
                        </div>):(<h5>Add to Cart - ${price}.00</h5>
                        )}
                    </button>
                </div>
                )}
                </ProductConsumer>
                </div>
                </div>
                
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCard:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
    font-family: Raleway; 
    font-size:20px;
    background-color: var(--mainGrey);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.1);
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition:all 1s linear;
}
.img-container{
    position:relative; 
    overflow: hidden;
}
.card-img-top{
    transition: all 0.3s linear;
    width: 100%;
    height: 50vh;
    object-fit: cover;
}
.card-img-top2{
    transition: all 0.3s linear;
    width: 10%;
    height: 3vh;
    object-fit: contain;
    margin-left: 20px;
}

.img-container:hover .card-img-top{
    transform: scale(1.1);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding:0.2rem 0.4rem;
    background: var(--mainWhite);
    opacity: 0.5;
    border:none;
    color:var(--mainPeach);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);
    transition: all 0.3s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0,0); 
}
.cart-btn:hover{
    color:var(--mainBrown);
    cursor: pointer;
}
.cart-btn-2{
    margin: -20px -20px -10px -50px; 
    padding:0.5rem 0.5rem 0.2rem 2.8rem;
    border: none;
    font-family: 'Roboto', sans-serif;
    border-radius:0.2rem 0.2rem 0.2rem 0.2rem;
    background: var(--mainWhite);
    color:var(--mainDark);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.1);
    
}
.cart-btn-2:hover{
    color:var(--darkGrey);
    cursor: pointer;
    transition: all 0.2s linear;
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
.cart-added{
    background: var(--mainWhite);
    color:var(--darkGrey);
    padding:0.5rem 2rem 0.5rem 2rem;
}
.cart-style{
    color:var(--mainPeach); 
}
.cart-style:hover{
    color:var(--mainBrown); 
    text-decoration: none;

}

`;