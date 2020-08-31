import React, {Component} from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";


export default class Model2 extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modelOpen2, closeModel} = value;
                    const {img4, title, price} = value.modelProduct;

                    if(!modelOpen2){
                        return null;
                    }
                    else{
                        return(
                        <ModelContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="model" className ="col-8 mx-auto col-md-6 col-lg-4 
                                    text-center text-capitalize p-5">
                                        <h5>item removed from cart</h5>
                                        <br />
                                        <img src={img4} className="img-fluid shadow-sm" alt="product" />
                                        <br />
                                        <br />
                                        <h5 className="text-blue">{title}</h5>
                                        <h5 className = "text-muted">price : $ {price}.00 </h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeModel()}>
                                            Back To Store
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModelContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModelContainer = styled.div`
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
#model {
    background:var(--mainWhite);
    }
`;
