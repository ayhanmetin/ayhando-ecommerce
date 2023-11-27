import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProductsLayout from './products/ProductsLayout';
import { Category, Product, Products } from './products';
import Login from './pages/Login';
import Cart from './pages/Cart';
import PrivateRoute from './PrivateRoute';

function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index={true} element={<Products />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default SiteRoutes;
