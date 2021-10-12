const { db } = require('./db')

const { Item, Menu, Restaurant } = require('./RIndex')

describe('Restaurant Menu Items', () => {

    beforeAll(async () => {
        await db.sync({
            force: true

        })
    })

    Test('can create a Item', async () => {
        const testItem = await Item.create({ name: 'Oxtails'})
        expect(testItem.name).toBe('Oxtails')
    })

    Test('can create a Menu', async () => {
        const testMenu = await Menu.create({ origin: 'Jamaica'})
        expect(testMenu).toBe('Jamaica')
    })

    Test('can create a Restaurant', async () => {
        const testRestaurant = await Restaurant.create({ name: 'Golden Krust', image: 'GK.jpeg'})
        expect(testRestaurant.name).toBe('Golden Krust')
        expect(testRestaurant.image)toBe('GK.jpeg')
    })

 



















})