import React ,{ useContext } from 'react';

import { Link , useParams} from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductContextProvider';
//styles
import styles from './ProductsDetails.module.css';


const ProductsDetails = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useContext(ProductsContext);
    const product = data[id-1];
    const {image,description,price,title,category} = product;
   /*
    const [products,setProducts] = useState([]);
        async function fetchData() {
    fetch(
      'https://fakestoreapi.com'
    )
      .then((res) => res.json())
      .then((res) =>
      setProducts(res.data)
      );
  }
  useEffect(() => {
    fetchData();
  }, []);
*/
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>
                    <span>Category:</span> {category}
                </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>price:{price} €</span>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
          
           
           
        </div>
    );
};

export default ProductsDetails;