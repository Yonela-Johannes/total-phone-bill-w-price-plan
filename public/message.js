const messageHandler = document.querySelector('.message')
const username = document.querySelector('.name')


if (username.value == '') {
    setTimeout(() => {
        messageHandler.innerHTML = ''
    }, 3000)
} else if (username.value !== '') {
    setTimeout(() => {
    }, 3000)
}

setTimeout(() => {
    // if (messageHandler.innerHTML.includes('your have selected price plan')){

    // }
}, 3000)
if (messageHandler.innerHTML.includes('your have selected price plan')) {
    messageHandler.classList.add('success')
}