export function fetchDrinkInformation() {
    axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(function (response) {
        const drinks = response.data.drinks;
        let ul = document.createElement('ul')

        drinks.forEach((drink) => {
            let li = document.createElement('li')

            let h2 = document.createElement('h2')
            h2.innerText = `${drink.strDrink}`

            let img = document.createElement('img')
            img.setAttribute('alt', `${drink.strDrink}`)
            img.setAttribute('src', `${drink.strDrinkThumb}`)

            let p = document.createElement('p')
            p.innerText = `Category: ${drink.strCategory}`

            let p2 = document.createElement('p')
            p2.innerText = `Instructions: ${drink.strInstructions}`
            p2.classList.add('content')

            let pWrapper = document.createElement('div')
            pWrapper.appendChild(h2)
            pWrapper.appendChild(p)
            pWrapper.appendChild(p2)
            pWrapper.classList.add('pWrapper')

            let drinWrapper = document.createElement('div')
            drinWrapper.appendChild(img)
            drinWrapper.appendChild(pWrapper)
            li.appendChild(drinWrapper)

            ul.appendChild(li)
        });
        document.getElementById('api-wrapper').appendChild(ul);
    })
        .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}


