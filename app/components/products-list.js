import Ember from 'ember';

export default Ember.Component.extend({
	cartIsEmpty: Ember.computed('products.@each.cart', function() {
		let products = this.get('products');
		return !products.filter(function(product){
			return product.get('cart');
		}).get('length');
	})
});