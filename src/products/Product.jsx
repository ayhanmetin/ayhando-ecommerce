import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [productId]);

  const cardStyle = {
    maxWidth: '800px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: '20px auto',
    backgroundColor: '#f8f8f8',
    borderRadius: '15px',
    overflow: 'hidden',
  };

  const imgStyle = {
    margin: '20px',
    maxHeight: '400px',
    objectFit: 'cover',
  };

  const addToCart = () => {
    let carts = JSON.parse(localStorage.getItem('carts')) ?? [];
    const existingProduct = carts.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      carts.push(product);
    }
    localStorage.setItem('carts', JSON.stringify(carts));
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            style={imgStyle}
            className="img-fluid"
            alt={product.title}
          />
        </div>
        <div className="col-md-7">
          <div style={{ margin: '7px' }} className="card-body">
            <h2 style={{ margin: '7px' }} className="card-title">
              {product.title}
            </h2>
            <p style={{ margin: '7px' }} className="card-text">
              {product.description}
            </p>
            <p className="card-text">
              <small className="text-muted">Price: ${product.price}</small>
            </p>
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
