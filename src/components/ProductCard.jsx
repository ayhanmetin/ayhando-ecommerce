import React, { useContext } from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext';

function ProductCard({ item }) {
  const { user } = useContext(SiteContext);

  function handleClick(product) {
    let localCarts = JSON.parse(localStorage.getItem('carts')) ?? [];
    let itemIndex = localCarts.findIndex(
      (localItem) => product.id === localItem.id,
    );
    if (itemIndex >= 0) {
      localCarts = localCarts.filter((item) => item.id !== product.id);
    } else {
      localCarts.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
    localStorage.setItem('carts', JSON.stringify(localCarts));
  }

  return (
    <div className="card cardStyle">
      <Link to={`/products/product/${item.id}`}>
        <img
          src={item.image}
          className="card-img-top p-2 imgStyle mt-3"
          alt={item.title}
        />
      </Link>
      <div className="card-body cardBodyStyle">
        <h5 className="card-title">{item.title.substring(0, 6)}...</h5>
        <p className="card-text">{item.description.substring(0, 8)}...</p>
        <p className="card-text priceStyle">{`$${item.price.toFixed(2)}`}</p>
        {user && (
          <a
            href="#"
            className="btn btn-warning btnStyle"
            onClick={() => handleClick(item)}
          >
            Add to Bag
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
