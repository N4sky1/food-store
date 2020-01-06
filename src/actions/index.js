
const foodstuffsRequested = () => {
  return {
    type: 'FETCH_FOODSTUFFS_REQUEST'
  }
};

const foodstuffsLoaded = (newFoodstuffs) => {
  return {
    type: 'FETCH_FOODSTUFFS_SUCCESS',
    payload: newFoodstuffs
  };
};

const foodstuffsError = (error) => {
  return {
    type: 'FETCH_FOODSTUFFS_FAILURE',
    payload: error
  };
};

export const foodstuffAddedToCart = (foodstuffId) => {
  return {
    type: 'FOODSTUFF_ADDED_TO_CART',
    payload: foodstuffId
  };
};

export const foodstuffRemovedFromCart = (foodstuffId) => {
  return {
    type: 'FOODSTUFF_REMOVED_FROM_CART',
    payload: foodstuffId
  };
};

export const allFoodstuffsRemovedFromCart = (foodstuffId) => {
  return {
    type: 'ALL_FOODSTUFFS_REMOVED_FROM_CART',
    payload: foodstuffId
  };
};

export const openCartInfo = () => {
  return {
    type: 'OPEN_CART_INFO'
  };
};

const fetchFoodstuff = (foodstuffstoreService) => () => (dispatch) => {
  dispatch(foodstuffsRequested());
  foodstuffstoreService.getFoodstuffs()
    .then((data) => dispatch(foodstuffsLoaded(data)))
    .catch((err) => dispatch(foodstuffsError(err)));
};
export {
  fetchFoodstuff
};
