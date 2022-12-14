import './styles/styles.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLayout } from "./components/UserLayout";
import {Home} from "./pages/Home";
import {Category} from "./pages/Category"
import {Detail} from "./pages/Detail"
import { CartProvider } from "./context/cartContext";
import {Cart} from "./pages/Cart"
import {Error} from "./pages/Error"

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path={"/category/:categoryId"} element={<Category />} />
                <Route path={"/product/:productId"} element={<Detail />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/error" element={<Error/>} />
              </Route>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
