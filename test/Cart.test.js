const { Cart } = require("../src/Cart");
const { Item } = require("../src/Item");



describe('Cart', () => {
    let cart;
  
    beforeEach(() => {
      cart = new Cart();
    });
  
    test('initializes with empty items and total price 0', () => {
      expect(cart.items).toEqual([]);
      expect(cart.totalPrice).toEqual(0);
    });
  
    describe('#addItem', () => {
      const item1 = new Item('Handbag', 500, false);
      const item2 = new Item('Watch', 40000, true);
  
      test('adds item to cart', () => {
        cart.addItem(item1, 1);
  
        expect(cart.items).toEqual([{ item: item1, quantity: 1 }]);
        expect(cart.totalPrice).toEqual(item1.price);
      });
  
      test('updates item quantity if added again', () => {
        cart.addItem(item1, 2);
  
        expect(cart.items).toEqual([{ item: item1, quantity: 2 }]);
        expect(cart.totalPrice).toEqual(item1.price * 2);
      });
    });
  
    describe('#itemQuantities', () => {
      const item1 = new Item('Handbag', 500, false);
      const item2 = new Item('Watch', 40000, true);
  
      test('returns array of item quantities', () => {
        cart.addItem(item1, 2);
        cart.addItem(item2, 3);
  
        expect(cart.itemQuantities()).toEqual(['Handbag - x2', 'Watch - x3']);
      });
    });
  
    test('returns array of itemized cart items', () => {
        const item1 = new Item('Handbag', 500, false);
        const item2 = new Item('Watch', 40000, true);
      
        cart.addItem(item1, 1);
        cart.addItem(item2, 2);
      
        expect(cart.itemizedList()).toEqual(['Handbag x1 - $500', 'Watch x2 - $80,000']);
      });
  
      test('returns array of on sale cart items', () => {
        const item1 = new Item('Handbag', 500, true);
        const item2 = new Item('Watch', 40000, false);
        const item3 = new Item('Shoes', 200, true);
      
        cart.addItem(item1, 1);
        cart.addItem(item2, 2);
        cart.addItem(item3, 3);
      
        expect(cart.onSaleItems()).toEqual(['Handbag x1 - $250', 'Shoes x3 - $300']);
      });
  });