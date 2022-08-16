import React from 'react';
import { Link } from 'react-router-dom';

//function
import { titleShorter } from '../../helpers/functions';

const Product = (props) => {
    const ProductData = props.ProductData;
    return (
        <div>
            <img src={ProductData.image} alt='product' style={{width:'200px'}}/>
            <h3>{titleShorter(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div>
               <Link to={`/products/${ProductData.id}`}>Details</Link> 
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;