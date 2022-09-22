const PricePlans = () => {
    let nameInput = ''
    let selectedPlan = ''

    const setName = (setname) => nameInput = typeof setname !== 'string' ? '' : setname.trim().replace(/[^a-z, ^A-Z]/g, '').toLocaleLowerCase().trim()
    const setPricePlan = (plan) => selectedPlan = plan

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

    const getName = () => nameInput.length > 4 && nameInput
    const getPricePlan = () => selectedPlan !== '' && selectedPlan

    return {
        setName,
        getName,
        setPricePlan,
        getPricePlan,
        responseHandler
    }
}

module.exports = PricePlans