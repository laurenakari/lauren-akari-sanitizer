import React from 'react';

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-1 mb-1 text-left 
            text-title">
                <br/ >
                <h3 className="text-capitalize">
                    {name} 
                </h3>
            </div>
        </div>
    )
}