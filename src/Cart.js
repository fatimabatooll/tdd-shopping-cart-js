class Cart {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
  }

  addItem(item, quantity) {
    const existingItemIndex = this.items.findIndex(
      (cartItem) => cartItem.item === item
    );

    if (existingItemIndex !== -1) {
      this.items[existingItemIndex].quantity += quantity;
    } else {
      this.items.push({ item, quantity });
    }

    this.totalPrice += item.price * quantity;
  }

  


}

module.exports = { Cart };


