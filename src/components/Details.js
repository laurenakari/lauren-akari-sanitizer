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
            {value => {
            const {
                id,
                rating,
                img2,
                img3,
                info,
                price,
                title,
                inCart
            } = value.detailProduct;

            return(
                <div className="container py-5">
                    {/* title */}
                    <div className="row">
                        <div className = "col-10 mx-auto text-center text-blue my-1">
                        <img src= "img/sapling-2.png" width="40px" height="40px" align="center" alt="images"></img>
                            <h2>The Quarantine Collection</h2>
                        <img src= "img/line.png" width="500px" height="3px" align="center" alt="images"></img>
                        </div>
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
                        <h4 className="text-blue">
                            <strong>
                                price: <span>$</span>
                                {price}
                            </strong>
                        </h4>
                        <p className="font-weight-bold mt-3 mb-0">
                            some info about product:
                        </p>
                        <p className="text-muted">{info}</p>
                        <Suggest />
                        {/*buttons */}
                        <div>
                            <Link to="/">
                                <ButtonContainer>back to products </ButtonContainer>
                            </Link>
                            <ButtonContainer
                                cart
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                                >
                                {inCart?"inCart": "add to cart"}
                            </ButtonContainer>
                        </div>
                    </div>
                </div>
                </div>
                );
            }}
        </ProductConsumer>
        );
    }
}