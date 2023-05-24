const track = document.getElementById("roller-coaster-u-track")
const container = document.querySelector(".container")
const about = document.querySelector(".about")
const cars = document.querySelector(".cars")





const trackLength = track.getTotalLength();
track.style.strokeDasharray = trackLength
track.style.strokeDashoffset = trackLength

let percentage = 0;
let drawLength = 0;

const showTrackProgression = () => {
    if(container.scrollTop > window.innerHeight && container.scrollTop < about.offsetHeight ){
        // percentage = (1 - (about.offsetHeight + window.innerHeight - container.scrollTop )/about.offsetHeight).toFixed(3)
        percentage = (container.scrollTop - window.innerHeight) / (about.offsetHeight - window.innerHeight)
        drawLength = trackLength * percentage
        track.style.strokeDashoffset =  drawLength+trackLength
    }

    else if(container.scrollTop > about.offsetHeight){
        container.removeEventListener('scroll', showTrackProgression)
        track.style.strokeDashoffset =  2*trackLength
        cars.style.opacity = "1"
    }
}

container.addEventListener('scroll', showTrackProgression)