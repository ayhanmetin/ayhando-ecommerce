import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setCategoryProducts(json));
  }, [categoryName]);

  const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <h1 style={headerStyle}>Category: {categoryName.toUpperCase()}</h1>
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          {categoryProducts.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
