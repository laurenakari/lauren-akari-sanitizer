import React from 'react';

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-1 mb-1 text-center 
            text-title">
                <br/ >
                <img src= "img/sapling.png" width="40px" height="40px"></img>
                <h1 className="text-capitalize font-weight-bold">
                    {name} 
                </h1>
                <img src= "img/line.png" width="800px" height="3px" align="center"></img>
            </div>
        </div>
    )
}