import React from 'react';
import './foodstuff-list-item.scss';

const FoodstuffListItem = ({ foodstuff, onAddedToCart }) => {
  const { title, description, price, image } = foodstuff;
  return (
    <div className="foodstuff__products-item">
      <div className="foodstuff__product-image">
        <img src={image} alt="product-item" />
      </div>
      <div className="foodstuff__product-details">
        <span className="foodstuff__product-title">{title}</span>
        <div className="foodstuff__product-description">{description}</div>
        <div className="foodstuff__price-wrap">
          <div className="foodstuff__product-price">{price} руб/кг</div>
          <button
            onClick={onAddedToCart}
            className="foodstuff__product-btn">
            Добавить в корзину
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default FoodstuffListItem;
