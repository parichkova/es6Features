function createBookShop(inventory) {
    return {
        inventory, //instead of inventory: inventory
        getTotalPrice () { //instead of getTotalPrice: function () {...}
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        getPriceByTitle (title) {
            return this.inventory.find(book, () => {
                return book.title === title;
            }).price;
        } 
    }
}

let inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent JavaScript', price: 15}
]

const bookShop = createBookShop(inventory);
bookShop.getTotalPrice();