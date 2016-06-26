import Ember from 'ember';

export default Ember.Route.extend({
	cart: Ember.inject.service('shopping-cart'),
	model() {
		return this.store.filter('product', (product) => {
			return this.get('cart').select({product});
		});
	},
	cartItem: Ember.computed('cart.items.length', function() {
		console.log('cartItem');
		return this.get('cart').select({product: this.get('product')});
	}),
	renderTemplate(controller, model) {
		this.render('products.cart', {
			model: model
		});
	},
	actions: {
		createOrder(customerName, customerPhone) {
			const items = this.get('cart').get('items').map(function(item){
				return {
					quantity: item.quantity*1,
					product: item.product.get('id')*1
				};
			});
			this.store.createRecord('order', {
				customer_name: customerName,
				customer_phone: customerPhone,
				order: items
			}).save().then(() => {
				this.get('cart').empty();
				this.store.unloadAll('product');
				this.store.findAll('product');
			});
		}
	}
});