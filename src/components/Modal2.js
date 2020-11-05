import React, {Component} from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";


export default class Modal2 extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen2, closeModal} = value;
                    const {img4, title, price} = value.modalProduct;

                    if(!modalOpen2){
                        return null;
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className ="col-8 mx-auto col-md-6 col-lg-4 
                                    text-center text-capitalize p-5">
                                        <h5>item removed from cart</h5>
                                        <br />
                                        <img src={img4} className="img-fluid shadow-sm" alt="product" />
                                        <br />
                                        <br />
                                        <h5 className="text-dark">{title}</h5>
                                        <h5 className = "text-muted">price : $ {price}.00 </h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModal()}>
                                            Back To Store
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display:flex;
align-items: center;
font-family: 'Playfair Display', sans-serif;
justify-content: center;
#modal {
    background:var(--mainWhite);
    }
`;
