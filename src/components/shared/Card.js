import React,{useContext} from 'react';
//context
import { CardContext } from '../../context/CardContextProvider';
//function
import { titleShorter} from '../../helpers/functions';
//icons
import trahIcon from '../../assets/icons/trash.svg';
//styles
import styles from './Card.module.css';


const Card = (props) => {
    const {dispatch} = useContext(CardContext);
    const {quantity,image,title,price} = props.data;
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>

                <div className={styles.data}>
                    <h3>{titleShorter(title)}</h3>
                    <h3>{price} <span>€</span></h3>
                </div>
            
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity ===1 ? <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:props.data})} ><img src={trahIcon} alt="remove"></img> </button> 
                :<button onClick={() => dispatch({type:"DECREASE",payload:props.data})}>-</button> 
             }
             <button onClick={() => dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
             
        </div>
    );
};

export default Card;