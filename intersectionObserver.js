const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // if(entry.isIntersecting){
        //     entry.target.classList.add('show')
        //     // observer.unobserve(entry.target)
        // }
        // else{
        //     entry.target.classList.remove('show')
        // }
    })
}, { rootMargin: "0px 0px -100px 0px" })

const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
hiddenElementsLeft.forEach((el) => {
    observer.observe(el)
})

const hiddenElementsRight = document.querySelectorAll('.hidden-right')
hiddenElementsRight.forEach((el) => {
    observer.observe(el)
})

const hiddenElementsInPlace = document.querySelectorAll('.hidden-in-place')
hiddenElementsInPlace.forEach((el) => {
    observer.observe(el)
})