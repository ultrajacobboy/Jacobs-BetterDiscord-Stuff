/**
 * @name Minimal Clock
 * @author jacob
 * @description Adds a minimalistic clock to the top of your Discord application!
 * @version 1.0
 */

module.exports = class ExamplePlugin {
  start() {
    // Called when the plugin is activated (including after reloads)
    function startTime() {

      //totally not skidded from https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }

    let icon = document.querySelector(".appMount-2yBXZl")
    let clock = document.createElement("h5");

    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

    clock.style.fontSize = "20px"
    clock.setAttribute("id", "clock")
    clock.style.position = "absolute"
    clock.style.left = "50%"
    clock.style.transform = "translate(-50%, 10%)"
    clock.style.color = "#e1e9ee"
    clock.style.background = "#79aef8"
    clock.style.borderRadius = "20px"
    clock.style.padding = "2px"
    clock.style.paddingLeft = "4px"
    clock.style.paddingRight = "4px"
    clock.style.fontFamily = "Lucida Console"

    clock.innerText = "IF YOU SEE THIS THE CLOCK PLUGIN BROKE"

    icon.append(clock)
    startTime()
  } 

  stop() {
    clock.remove()
  }
}
