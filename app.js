const PricePlans = () => {
    let nameInput = ''
    let selectedPlan = ''
    let numCoverage = []
    const setName = (setname) => nameInput = typeof setname !== 'string' ? '' : setname.trim().replace(/[^a-z, ^A-Z]/g, '').toLocaleLowerCase().trim()
    const setPricePlan = (plan) => selectedPlan = plan
    const setCoverage = (coverage) => numCoverage = typeof coverage !== 'string' ? '' : coverage.trim()

    const getCoverage = () => numCoverage

    const responseHandler = (plan) => {
        let message = ''
        if (!nameInput) {
            message = "Please enter your name!"
        }
        else if (!selectedPlan) {
            message = 'Please select price plan!'
        }
        else if (nameInput.length <= 4) {
            message = nameInput + 'is not a valid name, must exceed 4 characters'
        }
        else {
            message = nameInput.slice(0, 1).toUpperCase() + nameInput.slice(1,).toLowerCase() + ' your have selected price plan: ' + selectedPlan
        }
        return message
    }
    const billHandler = (coverage, name) => {
        let message = ''
        if (!nameInput) {
            message = "Please enter your name!"
        }
        else if (!coverage) {
            message = 'Please enter coverage!'
        }
        else if (name == false || name == undefined) {
            message = 'You do not have a price plan'
        }
        else if (nameInput.length <= 4) {
            message = nameInput + 'is not a valid name, must exceed 4 characters'
        }
        return message
    }

    const calc_bill = (plan, totalCoverage) => {
        if (plan == false || plan == undefined) {
            return
        }
        let bill = 0
        let call = 0
        let sms = 0
        let coverage = numCoverage.split(',')
        for (let x = 0; x < coverage.length; x++) {
            if (coverage[x].trim() == 'sms') {
                call += parseFloat(plan.sms_price)
            }
            else if (coverage[x].trim() == 'call') {
                sms += parseFloat(plan.call_price)
            }
        }
        bill = sms + call
        return bill.toFixed(2)
    }
    const getName = () => nameInput.length > 4 && nameInput
    const getPricePlan = () => selectedPlan !== '' && selectedPlan

    return {
        setName,
        getName,
        setPricePlan,
        getPricePlan,
        setCoverage,
        getCoverage,
        responseHandler,
        billHandler,
        calc_bill
    }
}

module.exports = PricePlans