
export default class FoodstuffstoreService {
  test = '';
  data = [];

  getFoodstuffs = async () => {
    const url = 'http://www.mocky.io/v2/5e118ecc3100004e00593f02'
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(url.status)
    }
    this.data = await res.json()
    return this.data
  }
}