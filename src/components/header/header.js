import React from 'react';
import './header.scss';
import { connect } from 'react-redux';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import shoppingCartImage from '../../images/shopping-cart.svg';
import { openCartInfo } from '../../actions';

const Header = ({ totalItems, cartInfo, openCartInfo }) => {
  return (
    <header className="foodstuff__header">
      <div className="foodstuff__logo">ПроDукто</div>
      <div className="foodstuff__shopping-cart">
        <div 
          className="foodstuff__cart-image-wrap"
          onClick={() => openCartInfo()}>
          <img 
            src={shoppingCartImage} 
            alt="shopping-cart"/>
          <span>
            {totalItems} кг
          </span>
        </div>
        
        <div 
          className="foodstuff__shopping-cart-info"
          style={cartInfo ? {display: 'flex'} : {display: 'none'}}>
          <ShoppingCartTable/>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = ({ shoppingCart: { totalItems, cartInfo }}) => {
  return {
    totalItems,
    cartInfo
  }
}
const mapDispatchToProps = {
  openCartInfo: openCartInfo
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
