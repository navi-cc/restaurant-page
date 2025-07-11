import "./styles.css";
import {homePageHandler} from "./navigation.js"

const nav = document.querySelector("header > nav")
const mainContent = document.querySelector('#content')

nav.onclick = navigationHandler;

function navigationHandler(e) {

    if (e.target.nodeName !== "LI") return;

    const target = e.target.textContent;
    mainContent.textContent = ''
    
  
    switch (target) {
        case "home":

            mainContent.appendChild(homePageHandler())
        
            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[1].classList.add("hidden")
            nav.children[2].classList.add("hidden")
            
            break;
        
        case "menu":

            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[0].classList.add("hidden")
            nav.children[2].classList.add("hidden")
            break;   

        case "about":

            
            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[0].classList.add("hidden")
            nav.children[1].classList.add("hidden")
            break;   
    
        default:
            break;
    }
    
}

window.onload = () => mainContent.appendChild(homePageHandler());