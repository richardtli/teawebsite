const amusementText = document.getElementById("amusement-text")
const container = document.querySelector(".container")
const about = document.querySelector(".about")
const amusementSector = document.querySelector(".amusement-sector")
const tCross = document.getElementById("t-cross")
// const cars = document.querySelector(".cars")





const amusementTextLength = amusementText.getTotalLength();
amusementText.style.strokeDasharray = amusementTextLength
amusementText.style.strokeDashoffset = amusementTextLength

let percentage = 0;
let drawLength = 0;

const showScrollProgressionAmusement = () => {
    if(container.scrollTop < window.innerHeight){
        amusementText.style.strokeDashoffset =  amusementTextLength
        tCross.style.opacity = "0"
    }
    else if(container.scrollTop > window.innerHeight && container.scrollTop < amusementSector.offsetHeight ){
        // percentage = (1 - (about.offsetHeight + window.innerHeight - container.scrollTop )/about.offsetHeight).toFixed(3)
        percentage = (container.scrollTop - window.innerHeight) / (amusementSector.offsetHeight - window.innerHeight)
        drawLength = amusementTextLength * percentage
        amusementText.style.strokeDashoffset =  amusementTextLength-drawLength
        document.documentElement.style.setProperty('--color1', '#fc0072');
        document.documentElement.style.setProperty('--color2', '#b900fc');
        document.documentElement.style.setProperty('--color3', '#00fcf4');
        document.documentElement.style.setProperty('--color4', '#5c00fc');
        tCross.style.opacity = "0"
    }
    

    else if(container.scrollTop > amusementSector.offsetHeight){
        // container.removeEventListener('scroll', showScrollProgressionAmusement)
        // amusementText.style.strokeDashoffset =  0
        tCross.style.opacity = "1"

    }
}

container.addEventListener('scroll', showScrollProgressionAmusement)