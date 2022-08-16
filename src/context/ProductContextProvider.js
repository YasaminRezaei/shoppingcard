import React, {useState,useEffect} from 'react';
//API
import { getProducts } from '../services/api';
//context
export const ProductsContext = React.createContext();

const ProductContextProvider = (props) => {
    const [products,setProducts] = useState([]);
    //get data async by mounting 
    useEffect(
        ()=> {
            const fetchAPI = async () => {
                setProducts(await getProducts() );
            }
            fetchAPI();
        },[]);

        
    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;