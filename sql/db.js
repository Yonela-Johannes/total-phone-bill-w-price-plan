const PricePlansDb = (db) => {
    const getUserByName = async (name) => {
        const [result] = await db.any('SELECT username, plan_name, sms_price, call_price FROM users JOIN price_plan ON users.price_plan_id = price_plan.id WHERE username = $1 GROUP BY username, plan_name, sms_price, call_price', name)
        return result
    }
    const getPlans = async (name, plan) => {
        return await db.manyOrNone('SELECT * FROM price_plan')
    }
    const insertPlan = async (username, planId) => {
        const existUser = await getUserByName(username)
        if (existUser?.username.toLowerCase() === username.toLowerCase()) {
            await db.none('UPDATE users SET price_plan_id = $2 WHERE username = $1', [username, planId])
        } else {
            await db.none('INSERT INTO users (username, price_plan_id) VALUES ($1, $2)', [username, planId])
        }
    }
    const getUsersPicePlans = async () => {
        return db.manyOrNone('SELECT username FROM users')
    }
    return {
        getUserByName,
        getPlans,
        insertPlan,
        getUsersPicePlans,
    }
}

module.exports = PricePlansDb