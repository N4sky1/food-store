import updateFoodstuffList from './foodstuff-list';
import FoodstuffstoreService from '../services/foodstuff-service'

let fetchService = new FoodstuffstoreService();

it('testing FETCH_FOODSTUFFS_REQUEST', () => {
    let state
    let action = {
        type: 'FETCH_FOODSTUFFS_REQUEST',
        payload: ''
    } 

    let newState = updateFoodstuffList(state, action)

    expect(newState.foodstuffs.length).toBe(0)
    expect(newState.loading).toBe(true)
    expect(newState.error).toBe(null)
})
it('testing FETCH_FOODSTUFFS_SUCCESS', async () => {
    let state = {
        foodstuffs: [],
        loading: true,
        error: null
      };
    let action = {
        type: 'FETCH_FOODSTUFFS_SUCCESS',
        payload: await fetchService.getFoodstuffs()
    } 

    let newState = updateFoodstuffList(state, action)

    expect(newState.foodstuffs.length).toBe(3)
    expect(newState.loading).toBe(false)
    expect(newState.error).toBe(null)
})
it('testing FETCH_FOODSTUFFS_FAILURE', () => {
    let state = {
        foodstuffs: [],
        loading: true,
        error: null
      }
    let action = {
        type: 'FETCH_FOODSTUFFS_FAILURE',
        payload: 'error'
    } 

    let newState = updateFoodstuffList(state, action)

    expect(newState.foodstuffs.length).toBe(0)
    expect(newState.loading).toBe(false)
    expect(newState.error).toBe('error')
})