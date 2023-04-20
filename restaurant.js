const { mongerInventory } = require("./fishMonger.js")

const mongerIn = mongerInventory()

//function builds an HTML version of their daily menu
//chef buys half of fishs inventory at or lower than specified price
//chef creates 3 meals per fish (soup. grilled dinner, and sandwhich)
const fishMenu = () => { 
    const chefInventory = []

    let totalHTML = `<h1>Menu</h1>\n<article class = "menu">\n`

    for (const fish of mongerIn) {

        fish.amount = 5
        chefInventory.push(fish)

        //create menu string
        totalHTML += `<h2>${fish.species}</h2>
                      <section class="menu_item">${fish.species} Soup</section>
                      <section class="menu_item">${fish.species} Sandwhich</section>
                      <section class="menu_item">Grilled ${fish.species}</section>\n`
    }
    totalHTML += `</article>`
    //return chef menu string
    return totalHTML
}

module.exports = {fishMenu}