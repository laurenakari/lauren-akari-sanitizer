import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import Product2 from "./Product2";
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

let styles = {
    margin: 'auto',
    width: '500px',
};

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
