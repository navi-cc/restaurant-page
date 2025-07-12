import "../styles/about.css"

export default function aboutPageHandler() {
    const mainContainer = document.createElement('section')
    const aboutTitle = document.createElement('h2')
    const aboutDescription = document.createElement('p')

    const restaurantLocation = {
        container: document.createElement('section'),
        setNode: () => {
            const span = document.createElement('span')
            const h3 = document.createElement('h3')

            h3.className = "restaurant-address"

            span.textContent = "Our Location"
            h3.textContent = "123 Sweet Street, Donutville, USA"

            restaurantLocation.container.appendChild(span)
            restaurantLocation.container.appendChild(h3)
        }
    }

    const restaurantContact = {
        container: document.createElement('section'),
        setNode: () => {
            const span = document.createElement('span')
            const h3 = document.createElement('h3')

            h3.className = "restaurant-number"
            span.textContent = "Call Us"
            h3.textContent = "(123) 456-7890"

            restaurantContact.container.appendChild(span)
            restaurantContact.container.appendChild(h3)


        }
    }

     const restaurantBusinessHours = {
        container: document.createElement('section'),
        setNode: () => {
            const span = document.createElement('span')
            const h3 = document.createElement('h3')

            h3.className = "restaurant-hours"

            span.textContent = "Open daily"
            h3.textContent = "7:00 AM - 8:00 PM"

            restaurantBusinessHours.container.appendChild(span)
            restaurantBusinessHours.container.appendChild(h3)
        }
    }


    mainContainer.className = "about-page"
    aboutTitle.className = "title"
    aboutDescription.className = "description"
    restaurantLocation.container.className = "restaurant-location"
    restaurantContact.container.className = "restaurant-contact"
    restaurantBusinessHours.container.className = "restaurant-business-hours"


    aboutTitle.textContent = "About Us"
    aboutDescription.textContent = `We're here to serve you fresh, 
                    delicious donuts every day. 
                    Come visit us and taste the joy!`

    restaurantLocation.setNode()
    restaurantContact.setNode()
    restaurantBusinessHours.setNode()


    mainContainer.appendChild(aboutTitle)
    mainContainer.appendChild(aboutDescription)
    mainContainer.appendChild(restaurantLocation.container)
    mainContainer.appendChild(restaurantContact.container)
    mainContainer.appendChild(restaurantBusinessHours.container)

    return mainContainer
}