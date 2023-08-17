const container = document.querySelector(".container");
const about = document.querySelector(".about");
const amusementSector = document.querySelector(".amusement-sector");
const amusementText = document.getElementById("amusement-text");
const tCross = document.getElementById("t-cross");


const hauntedSector = document.querySelector(".haunted-sector");
const hauntedText = document.getElementById("haunted-text");
const tCross2 = document.getElementById("t-cross2");

const aquariumsSector = document.querySelector(".aquariums-sector");
const aquariumsText = document.getElementById("aquariums-text");
const iCross = document.getElementById("i-cross");

// const cars = document.querySelector(".cars")

const amusementTextLength = amusementText.getTotalLength();
amusementText.style.strokeDasharray = amusementTextLength;
amusementText.style.strokeDashoffset = amusementTextLength;

let percentage1 = 0;
let drawLength1 = 0;

const hauntedTextLength = hauntedText.getTotalLength();
hauntedText.style.strokeDasharray = hauntedTextLength;
hauntedText.style.strokeDashoffset = hauntedTextLength;

let percentage2 = 0;
let drawLength2 = 0;

const aquariumsTextLength = aquariumsText.getTotalLength();
aquariumsText.style.strokeDasharray = aquariumsTextLength;
aquariumsText.style.strokeDashoffset = aquariumsTextLength;

let percentage3 = 0;
let drawLength3 = 0;

const showScrollProgressionAmusement = () => {
  if (container.scrollTop < window.innerHeight) {
    amusementText.style.strokeDashoffset = amusementTextLength;
    tCross.style.opacity = "0";
    document.documentElement.style.setProperty("--color1", "#00e1ff");
    document.documentElement.style.setProperty("--color2", "#eeff00");
    document.documentElement.style.setProperty("--color3", "#00e1ff");
    document.documentElement.style.setProperty("--color4", "#eeff00");
  } else if (container.scrollTop < amusementSector.offsetHeight) {
    // percentage = (1 - (about.offsetHeight + window.innerHeight - container.scrollTop )/about.offsetHeight).toFixed(3)
    percentage1 =
      (container.scrollTop - window.innerHeight) /
      (amusementSector.offsetHeight - window.innerHeight);
    drawLength1 = amusementTextLength * percentage1;
    amusementText.style.strokeDashoffset = amusementTextLength - drawLength1;
    document.documentElement.style.setProperty("--color1", "#fc0072");
    document.documentElement.style.setProperty("--color2", "#b900fc");
    document.documentElement.style.setProperty("--color3", "#00fcf4");
    document.documentElement.style.setProperty("--color4", "#5c00fc");
    tCross.style.opacity = "0";
  } else if (
    container.scrollTop <
    amusementSector.offsetHeight + window.innerHeight
  ) {
    // container.removeEventListener('scroll', showScrollProgressionAmusement)
    amusementText.style.strokeDashoffset = 0;
    tCross.style.opacity = "1";
    hauntedText.style.strokeDashoffset = hauntedTextLength;
  } else if (
    container.scrollTop <
    amusementSector.offsetHeight + hauntedSector.offsetHeight
  ) {
    percentage2 =
      (container.scrollTop -
        window.innerHeight -
        amusementSector.offsetHeight) /
      (hauntedSector.offsetHeight - window.innerHeight);
    drawLength2 = hauntedTextLength * percentage2;
    hauntedText.style.strokeDashoffset = hauntedTextLength - drawLength2;
    document.documentElement.style.setProperty("--color1", "#ff8000");
    document.documentElement.style.setProperty("--color2", "#00ff08");
    document.documentElement.style.setProperty("--color3", "#a200ff");
    document.documentElement.style.setProperty("--color4", "#ff8000");
    tCross2.style.opacity = "0";
  } else if (
    container.scrollTop <
    amusementSector.offsetHeight +
      window.innerHeight +
      hauntedSector.offsetHeight
  ) {
    // container.removeEventListener('scroll', showScrollProgressionAmusement)
    hauntedText.style.strokeDashoffset = 0;
    tCross2.style.opacity = "1";
    aquariumsText.style.strokeDashoffset = aquariumsTextLength;
  } else if (
    container.scrollTop <
    amusementSector.offsetHeight +
      hauntedSector.offsetHeight +
      aquariumsSector.offsetHeight
  ) {
    percentage3 =
      (container.scrollTop -
        window.innerHeight -
        amusementSector.offsetHeight -
        hauntedSector.offsetHeight) /
      (aquariumsSector.offsetHeight - window.innerHeight);
    drawLength3 = aquariumsTextLength * percentage3;
    aquariumsText.style.strokeDashoffset = aquariumsTextLength - drawLength3;
    document.documentElement.style.setProperty("--color1", "#00ffa2");
    document.documentElement.style.setProperty("--color2", "#00aeff");
    document.documentElement.style.setProperty("--color3", "#ffffff");
    document.documentElement.style.setProperty("--color4", "#0037ff");
    iCross.style.opacity = "0";
  }
  else if (
    container.scrollTop <
    amusementSector.offsetHeight +
      window.innerHeight +
      hauntedSector.offsetHeight
      + aquariumsSector.offsetHeight
  ){
    aquariumsText.style.strokeDashoffset = 0;
    iCross.style.opacity = "1";
  }
};

container.addEventListener("scroll", showScrollProgressionAmusement);
