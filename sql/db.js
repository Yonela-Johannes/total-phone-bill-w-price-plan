const PricePlansDb = (db) => {

    const insertUser = async (name, plan) => {
        await db.any('INSERT INTO users(name, plan_name) VALUES(username = $1, usage = $2) JOIN price_plan ON price_plan_id = price_plan.id', [name, plan])
    }

    return {
        insertUser
    }
}


module.exports = PricePlansDb