import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

//context
import { CardContext } from '../../context/CardContextProvider';

//icons
import shopIcon from '../../assets/icons/shop.svg';

const Navbar = () => {

    const {state} = useContext(CardContext); //dont need dispatch
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart">
                        <img src={shopIcon} alt='shopcard'/>
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;