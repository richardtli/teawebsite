function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
  
  let speed = 0;
  let numOfBubs = 100;
  let width = 0;
  
  const bubbleDiv = document.querySelector(".bubbles");
  
  for (let i = 0; i < numOfBubs; i++) {
    const bubble = document.createElement("span");
    bubble.style.top = `${(Math.random() * 100).toFixed(3)}svh`
    bubble.style.setProperty("--w", bubble.style.width);
    speed = (Math.random()**2 * (50 - 10) + 10).toFixed(2);
    bubble.style.setProperty("--i", speed);
  if (speed > 42) {
      bubble.style.zIndex = "2"
    } else {
      bubble.style.zIndex = "-2"
    }
    bubble.style.setProperty("--s", scale(speed, 10, 50, 0.5, 3));
  
    bubbleDiv.appendChild(bubble);
  }
  
  let bubbles = document.querySelectorAll("span");
  
  bubbles.forEach((bubble) => {
    bubble.style.scale = `${getComputedStyle(bubble).getPropertyValue("--s")}`;
  });


  
  