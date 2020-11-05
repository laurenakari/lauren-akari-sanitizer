import React, {Component} from 'react';
import Product from "./Product";
import styled from "styled-components";
import Title from "./Title"
import {ProductConsumer} from '../context'


export default class ProductList extends Component {
    render(){
        return(
            <ListWrapper>
            <React.Fragment>
                <div className="ad-1">
                    <img class="image" src="img/face-1.jpg" width="400" height="500"/>
                    <img class="image hover" src="img/green-hand.jpg" width="400" height="500"/>
                </div>
                <div className="ad-2">
                    <img class="image2" src="img/face-2.jpg" width="400" height="500"/>
                    <img class="image2 hover" src="img/face-3.jpg" width="400" height="500"/>
                </div>
                <div className="ad-3">
                    <img src = "img/pink-bg.jpg" alt="face-1" width="400" height="500"/>
                </div>
                <div className="ad-4">
                    <a href="#container">
                    <img src = "img/message.png" alt="face-1" width="500" height="350"/>
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div id= "container">
                <div className="py-5">
                    <Title name="The Quarantine Collection"/>
                    <div className ="container">
                        <br />
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
                </div>
            </React.Fragment>
            </ListWrapper>
                // <Product />
        )
    }
};

const ListWrapper = styled.div`

html {
    scroll-behavior: smooth;
  }

.ad-1 img.image{
    margin-left:150px;
}
.ad-1:hover img.image{
    display:none;
}
.ad-1 img.hover{
    display:none;
}
.ad-1:hover img.hover{
    display:block;
}

.ad-2 img.image2{
    margin-left:1000px;
    margin-top: -450px;
}
.ad-2:hover img.image2{
    display:none;
}
.ad-2 img.hover{
    display:none;
}
.ad-2:hover img.hover{
    display:block;
}

.ad-3{
    margin-left:450px;
    margin-top: -400px;
}

.ad-4{
    margin-left:700px;
    margin-top: -425px;
}

`;