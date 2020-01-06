import updateFoodstuffList from './foodstuff-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    FoodstuffList: updateFoodstuffList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
