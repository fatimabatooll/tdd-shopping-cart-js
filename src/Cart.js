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
  
    
  
    itemQuantities() {
      return this.items.map(
        (cartItem) => `${cartItem.item.name} - x${cartItem.quantity}`
      );
    }
  
    itemizedList() {
        return this.items.map(
          (cartItem) =>
            `${cartItem.item.name} x${cartItem.quantity} - $${(
              cartItem.item.price * cartItem.quantity
            ).toLocaleString('en-US', { maximumFractionDigits: 2, useGrouping: true })}`
        );
      }
  
    
  }

  module.exports = { Cart };
  





