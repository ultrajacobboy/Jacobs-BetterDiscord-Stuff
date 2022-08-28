/**
 * @name Top Bar
 * @author jacob
 * @description Recommended plugin for some of my other plugins.
 * @version 1.0
 */

 module.exports = class topBar {
    start() {
        let sidebar = document.querySelector(".app-2CXKsg")
        sidebar.style.marginTop = "20px"
    } 
  
    stop() {

    }
}
