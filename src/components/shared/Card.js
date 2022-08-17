import React,{useContext} from 'react';
//context
import { CardContext } from '../../context/CardContextProvider';
//function
import { titleShorter} from '../../helpers/functions';
//icons
import trahIcon from '../../assets/icons/trash.svg';


const Card = (props) => {
    const {dispatch} = useContext(CardContext);
    const {quantity,image,title,price} = props.data;
    return (
        <div>
            <div>
                <img src={image} alt="product"/>
                <div>
                    <h3>{titleShorter(title)}</h3>
                    <h3>{price} <span>€</span></h3>
                </div>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {quantity ===1 ? <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:props.data})} ><img src={trahIcon} alt="remove"></img> </button> 
                :<button onClick={() => dispatch({type:"DECREASE",payload:props.data})}>-</button> 
             }
             <button onClick={() => dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
             
        </div>
    );
};

export default Card;