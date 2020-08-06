import React from 'react';

const PartialDescription = (props) => {
return (
    <div className="ps-document">
        <p>{props.product.description}</p>
    </div>
);
}

export default PartialDescription;
