const Cart = require('../src/Cart.js');
const expect = require('chai').expect;

describe('Cart', () => {
  test ('should initialize as empty', () => {
      // Set
      const cart = new Cart()

      // Execute and Assert
      expect(cart.items).to.deep.equal([])
      expect(cart.totalPrice).to.be.equal(0)
  })
})
