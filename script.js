
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): ${item.getTotalPrice().toFixed(2)} $`);
        });
    }
}

const cart = new ShoppingCart();
const product1 = new Product(1, 'Apple', 1.5);
const product2 = new Product(2, 'Banana', 18);

cart.addItem(product1, 3);
cart.addItem(product2, 2);

console.log('Items in cart:');
cart.displayItems();
console.log(`Total items: ${cart.getTotalItems()}`);
console.log(`Total price: ${cart.getTotalPrice().toFixed(2)} $`);

cart.removeItem(1);
console.log('After removing Apple:');
cart.displayItems();
console.log(`Total items: ${cart.getTotalItems()}`);
console.log(`Total price: ${cart.getTotalPrice().toFixed(2)} $`);
