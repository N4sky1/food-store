import reducer from './index'
import updateShoppingCart from './shopping-cart';
let newFoodstuffList = {
    foodstuffs: [
        {
            "id": "1",
            "title": "Томаты",
            "image": "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c23b.png",
            "description": "Свежие, органические помидоры, сладкий сорт",
            "price": "110"
        },
        {   
            "id": "2",
            "title": "Морковь",
            "image": "http://www.pngpix.com/wp-content/uploads/2016/03/Fresh-Carrot-PNG-Image-500x313.png",
            "description": "Вкусная морковь, свежий урожай",
            "price": "23"
        },
        {
            "id": "3",
            "title": "Мяско",
            "image": "http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Meat-PNG-Transparent-Image.png",
            "description": "Еще тепленькое, вкусное мясцо",
            "price": "330"
        }
    ],
    loading: false,
    error: null
} 
let state = {
    FoodstuffList: newFoodstuffList,
    shoppingCart: {
        cartItems: [{
            id: '1',
            title: 'Томаты',
            count: 1
        }],
        orderTotal: 0,
        totalItems: 0, 
        cartInfo: false
    }
}
let newShoppingCart = updateShoppingCart
let newState = reducer

it('testing FOODSTUFF_ADDED_TO_CART', () => {
    
    let action = {
        type: 'FOODSTUFF_ADDED_TO_CART',
        payload: '2'
    } 

    newState = {
        FoodstuffList: newFoodstuffList,
        shoppingCart: newShoppingCart(state, action)
    };

    expect(newState.shoppingCart.cartItems.length).toBe(2)
    expect(newState.shoppingCart.cartItems[1].title)
        .toBe(newState.FoodstuffList.foodstuffs[1].title)
})
it('testing FOODSTUFF_REMOVED_FROM_CART', () => {
    
    let action = {
        type: 'FOODSTUFF_REMOVED_FROM_CART',
        payload: '1'
    } 
    newState = {
        FoodstuffList: newFoodstuffList,
        shoppingCart: newShoppingCart(state, action)
    };

    expect(newState.shoppingCart.cartItems.length).toBe(0)
})
it('testing ALL_FOODSTUFFS_REMOVED_FROM_CART', () => {
    
    let action = {
        type: 'ALL_FOODSTUFFS_REMOVED_FROM_CART',
        payload: '1'
    } 
    newState = {
        FoodstuffList: newFoodstuffList,
        shoppingCart: newShoppingCart(state, action)
    };

    expect(newState.shoppingCart.cartItems.length).toBe(0)
})
it('testing OPEN_CART_INFO', () => {
    
    let action = {
        type: 'OPEN_CART_INFO'
    } 
    newState = {
        FoodstuffList: newFoodstuffList,
        shoppingCart: newShoppingCart(state, action)
    };

    expect(newState.shoppingCart.cartInfo).toBe(true)
})
