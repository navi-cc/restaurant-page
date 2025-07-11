import "./home.css"
import "./menu.css"
import "./about.css"

function homePageHandler() {
    const mainSection = document.createElement('section');
    const restaurantTitle = document.createElement('h1');
    const restaurantDescription = document.createElement('p')

    const restaurantBestSeller = {
        container: document.createElement('section'),

        title: () => {
            const h2 = document.createElement('h2')
            h2.className = "title"
            h2.textContent = "Our Bestsellers"
            return h2
        },

        firstDonut: () => {
            const span = document.createElement('span')
            span.textContent = "Classic Glazed"
            return span

        },

        secondDonut: () => {
            const span = document.createElement('span')
            span.textContent = "Chocolate Dream"
            return span
        },

        thirdDonut: () => {
            const span = document.createElement('span');
            span.textContent = "Strawberry Sprinkles"
            return span
        },

        fourthDonut: () => {
            const span = document.createElement('span');
            span.textContent = "Boston Cream"
            return span
        }
    }

    const restaurantReasons = {
        container: document.createElement('section'),

        title: () => {
            const h2 = document.createElement('h2')
            h2.className = "title"
            h2.textContent = "Why You'll Love Us"
            return h2
        },

        first: () => {
            const span = document.createElement('span')
            span.textContent = "Made fresh daily"
            return span
        },

        second: () => {
            const span = document.createElement('span')
            span.textContent = "Locally sourced ingredients"
            return span
        },

        third: () => {
            const span = document.createElement('span')
            span.textContent = "Friendly, welcoming atmosphere"
            return span
        },
    }

    mainSection.className = "home-page"

    restaurantTitle.className = "restaurant-title"
    restaurantDescription.className = "restaurant-description"

    restaurantBestSeller.container.className = "restaurant-best-seller"
    restaurantReasons.container.className = "restaurant-reasons"


    restaurantTitle.textContent = "Donut Delight!";
    restaurantDescription.textContent =  `At Donut Delight, we believe every day is better with a donut. 
                From classic glazed to colorful sprinkles and rich chocolate fillings, 
                we craft each donut with love and the freshest ingredients. Start your morning with a warm, 
                fluffy treat or grab a box to share with family and friends 
                — there's always a perfect donut waiting for you here.`;



    Object.entries(restaurantReasons).map(([key, fn]) => {
        if (key === 'container') return;
        let node = fn();
        restaurantReasons.container.appendChild(node)
    });


    Object.entries(restaurantBestSeller).map(([key, fn]) => {
        if (key === 'container') return;
        let node = fn();
        restaurantBestSeller.container.appendChild(node)
    });

    mainSection.appendChild(restaurantTitle)
    mainSection.appendChild(restaurantDescription)
    mainSection.appendChild(restaurantBestSeller.container)
    mainSection.appendChild(restaurantReasons.container)

    return mainSection;
}

function menuPageHandler() {
    const mainContainer = document.createElement('section')
    const menuTitle = document.createElement('section')
    const menuDescription = document.createElement('p')
    const donutListContainer = document.createElement('section')

    const donutList = {
        classList: ["donut-name", "donut-price"],

        first: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Classic Glazed"
            donutPrice.textContent = "$7"

            donutName.appendChild(donutPrice)

            return donutName
        },

        second: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Chocolate Dream"
            donutPrice.textContent = "$5"

            donutName.appendChild(donutPrice)

            return donutName
        },

        third: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Strawberry Sprinkles"
            donutPrice.textContent = "$10"

            donutName.appendChild(donutPrice)

            return donutName
        },

        fourth: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Nutella Filled"
            donutPrice.textContent = "$8"

            donutName.appendChild(donutPrice)

            return donutName
        },

        fifth: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Oreo Crumble"
            donutPrice.textContent = "$5"

            donutName.appendChild(donutPrice)

            return donutName
        },

        sixth: () => {
            const donutName = document.createElement('span')
            const donutPrice = document.createElement('span')

            donutName.className = donutList.classList[0]
            donutPrice.className = donutList.classList[1]

            donutName.textContent = "Boston Cream"
            donutPrice.textContent = "$3"

            donutName.appendChild(donutPrice)

            return donutName
        },
    }

    mainContainer.className = "menu-page"
    menuTitle.className = "title"
    menuDescription.className = "description"
    donutListContainer.className = "classic-donuts"

    menuTitle.textContent = "Our Menu"
    menuDescription.textContent = `We offer a wide variety of donuts to satisfy every craving. 
                    Whether you love something classic or want to try something new,
                     we've got you covered!`

    Object.entries(donutList).map(([key, fn]) => {
        if (key === 'classList') return
        let node = fn()
        donutListContainer.appendChild(node)
    })

    mainContainer.appendChild(menuTitle)
    mainContainer.appendChild(menuDescription)
    mainContainer.appendChild(donutListContainer)

    return mainContainer
}

function aboutPageHandler() {
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


export {homePageHandler, 
        menuPageHandler, 
        aboutPageHandler}