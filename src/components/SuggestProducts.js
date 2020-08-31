import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import Product2 from "./Product2";

export default class Suggest extends Component {
    render() {
        return (
            <div className="row">
            <ProductConsumer>
                {value=> {
                    return value.products.map(product =>{
                        return <Product2 key={product.id} product=
                        {product} />;
                    })
                }}
            </ProductConsumer>
            </div>
        );
    }
}
