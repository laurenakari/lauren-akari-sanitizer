import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Suggest from './SuggestProducts';

let styles = {
    margin: 'auto',
    width: '500px',
};

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {item => {
            const {
                id,
                rating,
                img2,
                img3,
                info,
                price,
                title,
                inCart,
                count,
            } = item.detailProduct;

            return(
                <div className="container py-5">
                    {/* title */}
                    <div className="row">
                    </div>
                    <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3" style={styles}>
                    <br />
                    <br />
                        <Carousel>
                            <div>
                                <img src={img3} className="img-fluid" alt="product"/>
                            </div>
                            <div>
                                <img src={img2} className="img-fluid" alt="product"/>
                            </div>
                        </Carousel>
                    </div>
                    {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3
                    text-capitalize">
                        <br />
                        <br />
                        <h2>{title}</h2>
                        <h4 className="text-title text-uppercase
                        text-muted mt-3 mb-2">
                            <span className="text-uppercase">
                                {rating}</span>
                        </h4>
                        <h4 className="text-title
                        text-muted mt-3 mb-2">
                            <span>
                                The Quarantine Collection</span>
                        </h4>
                        <h4 className="text-dark">
                            <strong>
                                <span>$</span>
                                {price}.00
                            </strong>
                        </h4>
                        <br />
                        <Suggest />
                        <br />
                        <br />
                        <div>
                            <ButtonContainer
                                cart
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    item.addToCart(id);
                                    item.openModal(id);
                                }}
                                >
                                {inCart?"in Cart": "add to bag"}
                            </ButtonContainer>
                        </div>
                        <br />
                        <br />
                        <p className="font-weight-bold mt-3 mb-0">
                            some info about product:
                        </p>
                        <p className="text-muted">{info}</p>
                    </div>
                </div>
                </div>
                );
            }}
        </ProductConsumer>
        );
    }
}