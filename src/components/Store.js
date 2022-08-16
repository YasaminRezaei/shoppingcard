import React,{ useContext } from 'react';
//context
import { ProductsContext } from '../context/ProductContextProvider';
//component
import Product from './shared/Product';

const Store = () => {
    const products = useContext(ProductsContext);
    return (
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
          {products.map(product => <Product  key={product.id} ProductData={product} />)}
        </div>
    );
};

export default Store;