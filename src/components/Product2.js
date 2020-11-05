import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import{ProductConsumer} from "../context"; 
import PropTypes from 'prop-types';


export default class Product2 extends Component {
    render(){
        const{
            id, 
            img5,
        } = this.props.product;
        return(
            <ProductWrapper className="my-2 mx-1">

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
                <img src={img5} alt="product" className="card-img-top"/>
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
    background:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition:all 1s linear;
}

}
.img-container{
    position:relative; 
    overflow: hidden;
    width: 30px;
    margin-left: 10px;
}
.card-img-top{
    transition: all 0.3s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.1);
}

`;