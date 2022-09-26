let phoneNumber = document.querySelector('.phoneNumber')
let email = document.querySelector('.mailContact')
let instagram = document.querySelector('.instagram')
let facebook = document.querySelector('.facebook')


phoneNumber.addEventListener('click',()=>{
    window.open('tel:+34 624681426')
})
email.addEventListener('click',()=>{
    window.open('mailto:info@bellanapoli.com')
})

instagram.addEventListener('click',()=>{
    window.open('https://instagram.com/bellanapoli_corralejo?igshid=YmMyMTA2M2Y=')
})

facebook.addEventListener('click',()=>{
    window.open('https://www.facebook.com/Bella-Napoli-103094572555815/')
})


