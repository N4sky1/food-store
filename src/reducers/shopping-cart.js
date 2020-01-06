const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (foodstuff, item = {}, quantity) => {

  const {
    id = foodstuff.id,
    count = 0,
    title = foodstuff.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*foodstuff.price
  };
};

const updateOrderTotal = (orderTotal, foodstuff, quantity) => {
  if (quantity === 1) {
    return orderTotal + Number(foodstuff.price)
  }
  if (quantity === -1) {
    return orderTotal - Number(foodstuff.price)
  }
  return (quantity * Number(foodstuff.price)) + orderTotal
};

const updateCartInfo = (state) => {
  const {shoppingCart: { cartInfo }} = state;
  return {
    ...state.shoppingCart,
    cartInfo: !cartInfo
  }
};

const updateOrder = (state, foodstuffId, quantity) => {
  const { FoodstuffList: { foodstuffs }, shoppingCart: { cartItems, orderTotal, totalItems, cartInfo }} = state;

  const foodstuff = foodstuffs.find(({id}) => id === foodstuffId);
  const itemIndex = cartItems.findIndex(({id}) => id === foodstuffId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(foodstuff, item, quantity);
  
  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: updateOrderTotal(orderTotal, foodstuff, quantity),
    totalItems: totalItems + quantity,
    cartInfo: cartInfo
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      totalItems: 0, 
      cartInfo: false
    }
  }

  switch(action.type) {
    case 'FOODSTUFF_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'FOODSTUFF_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_FOODSTUFFS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    case 'OPEN_CART_INFO':
      return updateCartInfo(state);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
