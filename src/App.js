import './App.css';
//components
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/shared/ShopCart';

//routs
import {Route,Routes,Navigate} from "react-router-dom";

//context
import ProductContextProvider from './context/ProductContextProvider';
import CardContextProvider from './context/CardContextProvider';


function App() {
  return (
    <ProductContextProvider>
     <CardContextProvider>
      <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />}  />
          <Route path="/products" element={<Store />}  />
          <Route path="/cart" element={<ShopCart />}  />
          <Route path="/*" element={<Navigate to="/products" />}  />
        </Routes>
     </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
