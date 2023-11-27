import React, { useEffect, useState } from 'react';
import { Products } from '../products';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.slice(0, 3));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <Link to={`/products/product/${product.id}`}>
                <img
                  src={product.image}
                  className="d-block w-100 card-img-top p-2"
                  alt={product.title}
                />
              </Link>
              <div
                style={{ color: 'white' }}
                className="carousel-caption d-none d-md-block"
              >
                <h5>{product.title}</h5>
                <p>{product.description.slice(0, 70)}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </>
  );
}

export default Home;
