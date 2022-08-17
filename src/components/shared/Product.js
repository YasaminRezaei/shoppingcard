import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

//function
import { titleShorter,IsInCard,quantityCount } from '../../helpers/functions';

//context
import { CardContext } from '../../context/CardContextProvider';

//icons
import trahIcon from '../../assets/icons/trash.svg';

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
            {quantityCount(state, ProductData.id) ===1 && <button onClick={() => dispatch({type:"REMOVE_ITEM" ,payload:ProductData}) }> <img src={trahIcon} alt="remove"/></button>  }
            {quantityCount(state, ProductData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE" ,payload:ProductData}) }> - </button>  }
            {IsInCard(state,ProductData.id) ?
               <button onClick={() => dispatch({type:"INCREASE",payload:ProductData})}>+</button> 
              :<button onClick={() => dispatch({type:"ADD_ITEM",payload:ProductData})}>add to card</button>
            }
   
            </div>
        </div>
    );
};

export default Product;