import React, {useEffect} from 'react';
import './App.css'
import {Header} from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/action-creactors";

const App = () =>{
    const dispatch = useDispatch()

    const {cart, wishList, products} = useSelector(({cart: {cart}, wishList: {wishList}, products: {products}})=> ({
        cart,
        wishList,
        products
    }));

    useEffect(()=>{
        dispatch(setProducts())
    }, [])

    console.log(products)
    return (
        <div>
            <h2>{products.length}</h2>
            <Header />
            <ProductList products={products}/>
        </div>
    )
}

export default App;
