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
    describe("Select Price Plan", () => {
        it('should be able select price plan.', async () => {
            const name = 'kokos'
            const planId = 3
            await pricePlanDb.insertPlan(name, planId)
            const [users] = await pricePlanDb.getUsersPicePlans()
            const { username } = users
            const pricePlan = await pricePlanDb.getPlans()
            assert.equal(planId, pricePlan[2].id)
        })
    });
    describe("Get all Users", () => {
        it('should be able to get all user.', async () => {
            let name = 'kokos'
            const planId = 3
            await pricePlanDb.insertPlan(name, planId)
            name = 'Cocos'
            await pricePlanDb.insertPlan(name, planId)
            const users = await pricePlanDb.getUsersPicePlans()
            assert.deepEqual([{ username: 'kokos' }, { username: 'Cocos' }], users)
        })
    });
    describe("Get User/plans", () => {
        it('should be able to user and plans.', async () => {
            let name = 'kokos'
            const planId = 3
            await pricePlanDb.insertPlan(name, planId)
            name = 'Cocos'
            await pricePlanDb.insertPlan(name, planId)
            name = 'Chochos'
            await pricePlanDb.insertPlan(name, planId)
            const username = 'Cocos'
            const user = await pricePlanDb.getUserByName(username)
            assert.deepEqual({ username: 'Cocos', plan_name: 'text-me', sms_price: '0.17', call_price: '1.54' }, user)
        })
    });
})
