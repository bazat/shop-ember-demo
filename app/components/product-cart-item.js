import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	cart: Ember.inject.service('shopping-cart'),
	cartItem: Ember.computed('cart.items.length', function() {
		return this.get('cart').select({product: this.get('product')});
	}),
	summary: Ember.computed('cartItem', function() {
		const cartItem = this.get('cartItem');
		return cartItem.quantity * cartItem.product.get('price');
	})
});