import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Card from './Card';

//context
import { CardContext } from '../../context/CardContextProvider';
//styles
import styles from './ShopCart.module.css';
const ShopCart = () => {
    const {state,dispatch} = useContext(CardContext);
    
    return (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
            {state.selectedItems.map(item => <Card data={item} key={item.id}/>)}
          </div>
          {
            state.itemsCounter >0 &&
            <div className={styles.payments}>
                <p><span>Total Items : </span>{state.itemsCounter}</p>
                <p><span>Total Payments : </span>{state.total}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>clear</button>
                    <button className={styles.checkout} onClick={()=> dispatch({type: "CHECKOUT"})}>Checkout</button>
                </div>
            </div> 
          }
          {
            state.checkout && 
            <div className={styles.complete}>
                <h3>Checked out successfully !</h3>
                <Link to="/products">By More</Link>
            </div>
          }
           {
            !state.checkout && state.itemsCounter===0 &&
            <div className={styles.buy}>
                <h3>Want to buy?</h3>
                <Link to="/products">Go to shop</Link>
            </div>
          }

        </div>
    );
};

export default ShopCart;