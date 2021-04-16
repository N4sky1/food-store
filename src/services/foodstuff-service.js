
export default class FoodstuffstoreService {
  test = '';
  data = [];

  getFoodstuffs = async () => {
    const url = 'https://run.mocky.io/v3/cae2174e-5802-41e7-8a3c-38c0f132cf7d'
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(url.status)
    }
    this.data = await res.json()
    return this.data
  }
}