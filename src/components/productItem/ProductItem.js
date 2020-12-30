import React from 'react';

const ProductItem = ({products}) => {
    return (
        <div key={products.id}>
            <h5>{products.id}</h5>
            <h5>{products.title}</h5>
            <h5>{products.price} $</h5>
            <h5>{products.description}</h5>
            <hr/>
        </div>
    )
}

export default ProductItem;
