const amusementText = document.getElementById("amusement-text")
const container = document.querySelector(".container")
const about = document.querySelector(".about")
const amusementSector = document.querySelector(".amusement-sector")
// const cars = document.querySelector(".cars")





const amusementTextLength = amusementText.getTotalLength();
amusementText.style.strokeDasharray = amusementTextLength
amusementText.style.strokeDashoffset = amusementTextLength

let percentage = 0;
let drawLength = 0;

const showScrollProgressionAmusement = () => {
    if(container.scrollTop > window.innerHeight && container.scrollTop < amusementSector.offsetHeight ){
        // percentage = (1 - (about.offsetHeight + window.innerHeight - container.scrollTop )/about.offsetHeight).toFixed(3)
        percentage = (container.scrollTop - window.innerHeight) / (amusementSector.offsetHeight - window.innerHeight)
        drawLength = amusementTextLength * percentage
        amusementText.style.strokeDashoffset =  amusementTextLength-drawLength
    }

    // else if(container.scrollTop > about.offsetHeight){
    //     container.removeEventListener('scroll', showTrackProgression)
    //     track.style.strokeDashoffset =  2*trackLength
    //     cars.style.opacity = "1"
    // }
}

container.addEventListener('scroll', showScrollProgressionAmusement)