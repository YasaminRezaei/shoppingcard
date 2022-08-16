import './App.css';
//components
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';

//routs
import {Route,Routes,Navigate} from "react-router-dom";

//context
import ProductContextProvider from './context/ProductContextProvider';
import CardContextProvider from './context/CardContextProvider';

function App() {
  return (
    <ProductContextProvider>
     <CardContextProvider>
        <Routes>
          <Route path="/products/:id" element={<ProductsDetails />}  />
          <Route path="/products" element={<Store />}  />
          <Route path="/*" element={<Navigate to="/products" />}  />
        </Routes>
     </CardContextProvider>
    </ProductContextProvider>
  );
}

export default App;
