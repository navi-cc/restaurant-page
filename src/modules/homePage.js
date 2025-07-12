import "../styles/home.css"

export default function homePageHandler() {
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