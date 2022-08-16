import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//function
import { titleShorter,IsInCard } from '../../helpers/functions';

//context
import { CardContext } from '../../context/CardContextProvider';

const Product = (props) => {
    const ProductData = props.ProductData;
    const {state,dispatch} = useContext(CardContext);
    return (
        <div>
            <img src={ProductData.image} alt='product' style={{width:'200px'}}/>
            <h3>{titleShorter(ProductData.title)}</h3>
            <p>{ProductData.price}</p>
            <div>
               <Link to={`/products/${ProductData.id}`}>Details</Link> 
            </div>
            <div>
                {IsInCard(state,ProductData.id) ?
                 <button onClick={() => dispatch({type:"INCREASE",payload:ProductData})}>+</button> 
                 : <button>add to card</button>}
            </div>
        </div>
    );
};

export default Product;