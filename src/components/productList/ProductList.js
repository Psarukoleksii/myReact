import React from 'react';
import ProductItem from "../productItem/ProductItem";

const ProductList = ({products}) => {

    return (
        <div>
            {
                products.map((products) => {
                    return <ProductItem products={products} key={products.id}/>
                })
            }
        </div>
    )
}

export default ProductList;
