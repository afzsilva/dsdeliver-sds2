import './styles.css';
import React from 'react'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import OrderLocation from './OrderLocation';

import { useEffect } from 'react';
import { useState } from 'react';
import { OrderLocationdata, Product } from "./types";
import { fetchProducts } from "../api";

export const Orders = () => {

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);


    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    )
}

export default Orders; 