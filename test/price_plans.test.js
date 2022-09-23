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
            const username = 'kokos'
            await pricePlanDb.insertPlan(username, 3)
            const pricePlan = await pricePlanDb.getPlans()
            console.log(pricePlan)
            // assert.equal(undefined, exist)
        })
    });

})
