const Routes = (pricePlans, pricePlansDb) => {
    const getHome = async (req, res) => {
        res.send('I am home my nigga')
    }

    const postCalcBill = async (req, res) => {

    }

    const getPricePlans = (req, res) => {

    }

    const getLinkedUser = (req, res) => {

    }
    const postLinkedUser = (req, res) => {

    }

    return {
        getHome,
        postCalcBill,
        getPricePlans,
        getLinkedUser,
        postLinkedUser
    }
}

module.exports = Routes