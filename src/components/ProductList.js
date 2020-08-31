import React, {Component} from 'react';
import Product from "./Product";
import Title from "./Title"
import {ProductConsumer} from '../context'


export default class ProductList extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="py-1">

                    <div className="container shadow-lg">
                        <Title name="our products"/>
                        <h5 className="font-weight-bold text-blue text-center">
                            Ethically sourced. 100% organic. Not available IRL. 
                         </h5>
                         <br />
                        <div className="container col-7 row-5">
                            <img src="img/hand-sanitizer.gif" className="shadow-lg" width="600px" alt="images"/>
                        </div>
                        <br />
                        <br />
                        <div className="col-10 mx-auto text-center text-blue my-1">
                            <img src= "img/sapling-2.png" width="20px" height="20px" alt="images"></img>
                            <h5 className="font-weight-bold text-blue text-center mx-5">
                                Hand Sanitizers 
                            </h5>
                            <img src= "img/line.png" width="400px" height="3px" align="center" alt="images"></img>
                         </div>
                        <br />
                        <div className="row">
                        <ProductConsumer>
                            {value=> {
                                return value.products.map( product =>{
                                    return <Product key={product.id} product=
                                    {product} />;
                                })
                            }}
                        </ProductConsumer>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </React.Fragment>
                // <Product />
        )
    }
};