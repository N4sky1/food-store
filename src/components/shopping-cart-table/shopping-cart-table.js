import React from 'react';
import { connect } from 'react-redux';

import {
  foodstuffAddedToCart,
  foodstuffRemovedFromCart,
  allFoodstuffsRemovedFromCart } from '../../actions';

import './shopping-cart-table.scss';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item) => {
    const { id, title, count, total } = item;
    return (
      <li key={id}  className="shopping-info__item">
        <div className="shopping-info__title">{title}</div>
        <div
          onClick={() => onDecrease(id)}
          className="shopping-info__btn shopping-info__decrease-btn">
        </div>
        <div className="shopping-info__count">{count} кг</div>
        <div
          onClick={() => onIncrease(id)}
          className="shopping-info__btn shopping-info__increase-btn">
        </div>
        <div className="shopping-info__total">{total} руб</div>
        <div
          onClick={() => onDelete(id)}
          className="shopping-info__btn shopping-info__delete-btn">
        </div>
      </li>
    );
  };

  return (
    <div className="foodstuff__shopping-info shopping-info">
      <h2>Ваши покупки</h2>
      <ul className="shopping-info__list">
        { items.map(renderRow) }
      </ul>

      <div className="shopping-info__total-cost">
        всего {total} руб
      </div>

      <div className="shopping-info__close"></div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: foodstuffAddedToCart,
  onDecrease: foodstuffRemovedFromCart,
  onDelete: allFoodstuffsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
