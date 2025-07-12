import "../styles/menu.css"

export default function menuPageHandler() {
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