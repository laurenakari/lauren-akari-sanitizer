import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import{ProductConsumer} from "../context"; 
import PropTypes from 'prop-types';


export default class Product2 extends Component {
    render(){
        const{
            id, 
            img3,
        } = this.props.product;
        return(
            <ProductWrapper className="col-11 col-md-6 col-lg-3
            my-3">

                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                <div 
                className="img-container p-1"
                onClick={() =>
                    value.handleDetail(id)
                }
                >

                <Link to= "/details">
                <img src={img3} alt="product" className="card-img-top"/>
                </Link>
                
                </div>
                )}
                    </ProductConsumer>
                </div>
                
                <ProductConsumer>
                {(value) => (
                <div 
                className="img-container p-3 mx-auto my-auto"
                onClick={() =>
                    value.handleDetail(id)
                }
                >
                </div>
                )}
                </ProductConsumer>
            </ProductWrapper>
        );
    }
}

Product2.propTypes = {
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

`;