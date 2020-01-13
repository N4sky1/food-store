import FoodstuffstoreService from './foodstuff-service'

let fetchService = new FoodstuffstoreService();

it('testing fetch service', async () => {
    let data = await fetchService.getFoodstuffs()

    expect(data.length).toBe(3)

})