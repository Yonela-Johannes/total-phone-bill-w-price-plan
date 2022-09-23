const Routes = (pricePlans, pricePlansDb) => {
    const getHome = async (req, res) => {
        res.render('index', {
            result: '0.00'
        })
    }

    const postCalcBill = async (req, res) => {
        const { name, coverage } = req.body
        pricePlans.setName(name)
        pricePlans.setCoverage(coverage)
        const username = pricePlans.getName()
        let validName = ''
        if (name) {
            validName = await pricePlansDb.getUserByName(username)
        }
        if (validName === '') {
            validName = false
        }
        const totalCoverage = pricePlans.getCoverage()
        const result = pricePlans.calc_bill(validName, totalCoverage)
        res.render('index', {
            result: result ? result : '0.00',
            message: pricePlans.billHandler(coverage, validName),
        })
    }

    const postLinkedUser = async (req, res) => {
        const { name, plans } = req.body
        pricePlans.setName(name)
        pricePlans.setPricePlan(plans)
        const username = pricePlans.getName()
        const planId = pricePlans.getPricePlan()
        if (planId !== undefined && username) {
            await pricePlansDb.insertPlan(username, planId)
        }
        const pricePlan = await pricePlansDb.getPlans()
        res.render('linkUser', {
            pricePlan,
            message: pricePlans.responseHandler()
        })

    }

    const getLinkedUser = async (req, res) => {
        const pricePlan = await pricePlansDb.getPlans()
        res.render('linkUser', {
            pricePlan
        }
        )
    }

    const getPricePlans = async (req, res) => {
        const users = await pricePlansDb.getUsersPicePlans()
        res.render('priceplans', {
            users,
        })

    }
    const getPricePlan = async (req, res) => {
        const { id } = req.params
        const user = await pricePlansDb.getUserByName(id)
        res.render('userpriceplan', {
            user
        })
    }

    return {
        getHome,
        postCalcBill,
        getPricePlans,
        getLinkedUser,
        postLinkedUser,
        getPricePlan
    }
}

module.exports = Routes