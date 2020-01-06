const updateFoodstuffList = (state, action) => {

  if (state === undefined) {
    return {
      foodstuffs: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_FOODSTUFFS_REQUEST':
      return {
        foodstuffs: [],
        loading: true,
        error: null
      };

    case 'FETCH_FOODSTUFFS_SUCCESS':
      return {
        foodstuffs: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_FOODSTUFFS_FAILURE':
      return {
        foodstuffs: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.FoodstuffList;
  }
};

export default updateFoodstuffList;
