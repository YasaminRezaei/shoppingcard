import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
//style
import styles from './Navbar.module.css';

//context
import { CardContext } from '../../context/CardContextProvider';

//icons
import shopIcon from '../../assets/icons/shop.svg';

const Navbar = () => {

    const {state} = useContext(CardContext); //dont need dispatch
    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.listContainer}>
                    <ul>
                        <li>
                            <div className={styles.itemcontainer}> 
                                <Link className={styles.productLink} to="/products">Products</Link>
                            </div> 
                        </li>
                        <li>
                            <div className={styles.itemcontainer}> 
                                <Link className={styles.productLink} to="/products">Home</Link>
                            </div> 
                        </li>
                        <li>
                            <div className={styles.itemcontainer}> 
                                <Link className={styles.productLink} to="/products">Kontakt</Link>
                            </div> 
                        </li>
                        <li>
                            <div className={styles.itemcontainer}> 
                                <Link className={styles.productLink} to="/products">About us</Link>
                            </div> 
                        </li>
        
                    </ul>
                </div>
                <div className={styles.iconcontainer}>
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