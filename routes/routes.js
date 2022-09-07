const Routes = (pricePlans, pricePlansDb) => {
    const getHome = async (req, res) => {
        res.render('index', {

        })
    }

    const postPricePlan = async (req, res) => {
        console.log(req.body)
        res.render('index')

    }

    const postCalcBill = async (req, res) => {

    }

    const getPricePlans = (req, res) => {

    }

    const getLinkedUser = (req, res) => {
        console.log(req.body)
        res.render('priceplans', {

        })

    }
    const postLinkedUser = async (req, res) => {
        const { name, plan } = req.body
        await pricePlansDb.insertUser(name, plan)
        res.redirect(`/price_plans/${name}`)
    }

    return {
        getHome,
        postCalcBill,
        getPricePlans,
        getLinkedUser,
        postLinkedUser,
        postPricePlan
    }
}

module.exports = Routes