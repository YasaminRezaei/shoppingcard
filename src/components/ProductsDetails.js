import React ,{ useContext } from 'react';

import { Link , useParams} from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductContextProvider';


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
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span> {category}</p>
                <div>
                    <p><span>price:</span> {price} <span>€</span></p>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
          
           
           
        </div>
    );
};

export default ProductsDetails;