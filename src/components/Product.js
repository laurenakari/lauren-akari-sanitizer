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
                className="img-container p-3"
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
                <div className= ".cart-footer">
                    <p className="align-self-center mt-3 mb-2 ml-3">
                        {title}
                    </p>
                    <p className="align-self-center mb-3 ml-3">
                        ${price}.00
                    </p>
                </div>
                </div>
                
                {/*second button */}
                <ProductConsumer>
                {(value) => (
                <div 
                className="img-container align-self-center p-3 mt-3 mb-2 ml-5"
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
                <h5 className="cart-added" disabled>
                    {" "}
                        <Link 
                        style={{color: '#eed2c3'}}
                        activeStyle={{color: 'white'}}
                        to ="/cart">
                            View Cart
                        </Link>
                    </h5>):(<h5>Add to Cart</h5>
                    )}
                </button>
                
                </div>
                )}
                </ProductConsumer>
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
    background-color: var(--mainEggshell);
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background:rgba(247, 247, 247);
    }
}
.img-container{
    position:relative; 
    overflow: hidden;
}
.card-img-top{
    transition: all 0.3s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.1);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding:0.2rem 0.4rem;
    background: var(--mainPeach);
    border:none;
    color:var(--mainEggshell);
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
    position: center;
    padding:0.4rem 1rem 0.4rem;
    border:none;
    border-radius:0.2rem 0.2rem 0.2rem 0.2rem;
    background: var(--mainWhite);
    color:var(--mainDarkBrown);
    
}
.cart-btn-2:hover{
    color:var(--mainPeach);
    cursor: pointer;
    transition: all 0.2s linear;
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}

`;