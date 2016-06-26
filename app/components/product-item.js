import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  cart: Ember.inject.service('shopping-cart'),
  cartItem: Ember.computed('cart.items.length', function() {
    return this.get('cart').select({product: this.get('product')});
  }),
  remaining: Ember.computed('cartItem.quantity', function() {
    let product = this.get('product');
    let cartItem = this.get('cartItem');
    return cartItem ? product.get('quantity') - cartItem.quantity : product.get('quantity');
  }),
  disabled: function() {
    return this.get('remaining') <= 0;
  }.property('remaining'),
  actions: {
    increase() {
      const product = this.get('product');
      this.sendAction('updateCart', {
        type: 'increase',
        product
      });
    },
    decrease() {
      const product = this.get('product');
      this.sendAction('updateCart', {
        type: 'decrease',
        product
      });
    },
    remove(item) {
      this.get('cart').remove(item);
    },
    updateQuantity(value) {
      if(typeof value !== 'number'){
        value = value*1;
      }
      this.sendAction('updateCart', {
        type: 'value',
        value,
        product: this.get('product')
      });
    }
  }
});