const paybutton = document.querySelector('.pay-btun')
paybutton.addEventListener('click', () => {
    document.getElementsByClassName('remove-wrap')[0].style.visibility = 'visible'
})
document.querySelector('.remove-take').addEventListener('click', () => {
    document.getElementsByClassName('remove-wrap')[0].style.visibility = 'hidden'
})

document.querySelector('.confirm').addEventListener('click', () => {
    document.getElementsByClassName('remove-wrap')[0].style.visibility = 'hidden'
    document.getElementsByClassName('success-wrap')[0].style.visibility = 'visible'
    setTimeout(() => {
        document.getElementsByClassName('success-wrap')[0].style.visibility = 'hidden'
    }, 2000)
})
