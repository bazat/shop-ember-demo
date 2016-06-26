import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	cart: Ember.inject.service('shopping-cart'),
	summary: Ember.computed('cart', function() {
		const cart = this.get('cart');
		let summ = 0;
		this.get('model').forEach(function(product){
			const cartItem = cart.select({product});
			summ += product.get('price') * cartItem.quantity;
		});
		return summ;
	})
});
