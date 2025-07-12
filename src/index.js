import "./styles/styles.css"
import setHomePage from "./modules/homePage.js"
import setMenuPage from "./modules/menuPage.js"
import setAboutPage from "./modules/aboutPage.js"


const homePage = setHomePage()
const menuPage = setMenuPage()
const aboutPage = setAboutPage()

const nav = document.querySelector("header > nav")
const mainContent = document.querySelector('#content')

nav.onclick = navigationHandler;

function navigationHandler(e) {

    if (e.target.nodeName !== "LI") return;

    const target = e.target.textContent;
    mainContent.textContent = ''
    
  
    switch (target) {
        case "home":

            mainContent.appendChild(homePage)
        
            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[1].classList.add("hidden")
            nav.children[2].classList.add("hidden")
            
            break;
        
        case "menu":

            mainContent.appendChild(menuPage)

            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[0].classList.add("hidden")
            nav.children[2].classList.add("hidden")
            break;   

        case "about":

            mainContent.appendChild(aboutPage)
            e.target.classList.add("cover");
            e.target.classList.remove("hidden")
            nav.children[0].classList.add("hidden")
            nav.children[1].classList.add("hidden")
            break;   
    
        default:
            break;
    }
    
}

window.onload = () => mainContent.appendChild(homePage);