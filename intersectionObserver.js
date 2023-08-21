const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
        } 
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => {
    observer.observe(el)
})