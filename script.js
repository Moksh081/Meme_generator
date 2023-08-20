(function() {
    const images = ["m1", "m2", "m3", "m4", "m5"];
  
    const buttonL = document.querySelector(".btn-left");
    const buttonR = document.querySelector(".btn-right");
    const imgdiv = document.querySelector(".img-container");
    let counter = 0;
  
    buttonL.addEventListener("click", () => {
      counter--;
      if (counter < 0) {
        counter = images.length - 1;
      }
      imgdiv.style.background = `url('imm/${images[counter]}.jpg')`;
    });
  
    buttonR.addEventListener("click", () => {
      counter++;
      if (counter >= images.length) {
        counter = 0;
      }
      imgdiv.style.background = `url('imm/${images[counter]}.jpg')`;
    });
  })();
  