import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductListPage from "./pages/ProductListPage";
import Cart from "./components/Cart";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/product" element={<ProductListPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/detail/:id" element={<ProductDetail/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
