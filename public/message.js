const messageHandler = document.querySelector('.message')
const username = document.querySelector('.name')

console.log('We are here checking this out!!')
if (username.value == '') {
    setTimeout(() => {
        messageHandler.innerHTML = ''
    }, 3000)
} else if (username.value !== '') {
    setTimeout(() => {
    }, 3000)
}

console.log(messageHandler.innerHTML.includes('Invalid coverage input!'))
setTimeout(() => {
    if (messageHandler.innerHTML.includes('Invalid coverage input!')) {
        messageHandler.innerHTML = ''
    }
}, 3000)
if (messageHandler.innerHTML.includes('your have selected price plan')) {
    messageHandler.classList.add('success')
}