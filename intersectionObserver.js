const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        } 
    })
}, { rootMargin: "-30px" })

const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
hiddenElementsLeft.forEach((el) => {
    observer.observe(el)
})

const hiddenElementsRight = document.querySelectorAll('.hidden-right')
hiddenElementsRight.forEach((el) => {
    observer.observe(el)
})