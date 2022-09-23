const PricePlanDb = require('../sql/db.js')
const assert = require('assert')
const pgp = require('pg-promise')();

const local = 'postgres://postgres:juanesse123@localhost:5432/priceplanner_tests';
const connectionString = process.env.DATABASE_URL || local
const config = {
    connectionString,
    max: 20
}

const db = pgp(config)
const pricePlanDb = PricePlanDb(db)


describe('Price Planner w/ Total Phone Bill Test', () => {
    beforeEach(async () => {
        await db.any('DELETE FROM users')
    })
    describe("Name Exist Fail Check", () => {
        it('should be able to check if name in database.', async () => {
            const username = 'yonela'
            const exist = await pricePlanDb.getUserByName(username)
            assert.equal(undefined, exist)
        })
    });
    describe("Name Exist", () => {
        it('should be able to check if name in database.', async () => {
            const name = 'kokos'
            await pricePlanDb.insertPlan(name, 3)
            const [users] = await pricePlanDb.getUsersPicePlans()
            const { username } = users
            assert.equal(name, username)
        })
    });

})
