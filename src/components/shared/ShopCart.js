import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//components
import Card from './Card';

//context
import { CardContext } from '../../context/CardContextProvider';

const ShopCart = () => {
    const {state,dispatch} = useContext(CardContext);
    
    return (
        <div>
          <div>
            {state.selectedItems.map(item => <Card data={item} key={item.id}/>)}
          </div>
          {
            state.itemsCounter >0 &&
            <div>
                <p><span>Total Items:</span>{state.itemsCounter}</p>
                <p><span>Total Payments:</span>{state.total}</p>
                <div>
                    <button onClick={() => dispatch({type: "CLEAR"})}>clear</button>
                    <button onClick={()=> dispatch({type: "CHECKOUT"})}>Checkout</button>
                </div>
            </div> 
          }
          {
            state.checkout && 
            <div>
                <h3>Checked out successfully</h3>
                <Link to="/products">By More</Link>
            </div>
          }
           {
            !state.checkout && state.itemsCounter===0 &&
            <div>
                <h3>Want to buy?</h3>
                <Link to="/products">Go to shop</Link>
            </div>
          }

        </div>
    );
};

export default ShopCart;