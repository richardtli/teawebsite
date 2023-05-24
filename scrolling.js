const aboutSector = document.querySelector(".about-sector")

const observer = new IntersectionObserver((entries) => {
    console.log("hi1")
    entries.forEach((entry) => {
        console.log("hi2")
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            if(entry.target.id === "amusement"){
                aboutSector.style.backgroundImage = "url('disneyworld.jpg')"
                aboutSector.style.opacity = "0.3"
            }
        }

        else if (!entry.isIntersecting){
            entry.target.classList.remove('show')
        }
    })
    
}, {
    rootMargin: "-30% 0% -30% 0%"});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((element) => observer.observe(element))