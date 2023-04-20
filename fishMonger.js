const { boatInventory } = require("./fishingBoat.js")

//invoke boatInventory
const boatInv = boatInventory()

//define chef budget
chefBudget = 6.50

//mongerInventory function
//checks w/chef@restaurant for specified price per fish
//if no budget specified, then all fish less than $7.50/fish
//add 10 of each fish (which meet specified criteria) to monger array
//returns monger array
const mongerInventory = () => {

    //monger array inventory (want 10 of each fish in budget)
    const mongerInventoryArray = []

    for ( const fish of boatInv) {
    if (fish.amount >= 10) {

    if (chefBudget !== null) {
            if (fish.price < chefBudget) {

                fish.amount = 10
                mongerInventoryArray.push(fish)
            }
    }
    else {
            if (fish.price < 7.50) {
                fish.amount = 10
                mongerInventoryArray.push(fish)
            }
        }
    }
}

    return mongerInventoryArray
}

module.exports = { mongerInventory }