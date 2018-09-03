function validateShoppingList(...thingsToBuy) {
    if (!thingsToBuy.includes('milk')) {
        return ['milk', ...thingsToBuy]; //spread
    }

    return thingsToBuy;
}

//remind me to take milk

validateShoppingList('bread', 'water', 'vegetables')