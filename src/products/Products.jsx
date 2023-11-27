import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <>
      <h2 className="text-center my-4">Our Top Products</h2>
      <div className="container">
        <div className="row g-4">
          {products.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
