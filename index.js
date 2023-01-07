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

    new Promise((resolve) => {
        setTimeout(() => {
            document.getElementsByClassName('success-wrap')[0].style.visibility = 'hidden';
            resolve()
        }, 2000)

    }).then(() => {
        document.getElementsByClassName('invoice-wrap')[0].style.visibility = 'visible'

    }).then(() => {
        setTimeout(() => {
            document.getElementsByClassName('invoice-wrap')[0].style.visibility = 'hidden'
        }, 10000)
    })

})

