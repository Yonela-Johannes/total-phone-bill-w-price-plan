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


describe('Registration Test', () => {
    beforeEach(async () => {
        // await waitersDb.deleteWaiters()
        // await waitersDb.resetDays()
    })
    describe("Login", () => {
        it('should store and fetch name from database', async () => {
            // const username = 'Yonela'
            // await waitersDb.storeName(username)
            // const getWaiter = await waitersDb.getUser(username)
            // const { name } = getWaiter
            // assert.equal('Yonela', name)
        })
    });


})