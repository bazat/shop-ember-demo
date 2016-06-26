import Ember from 'ember';

export default Ember.Service.extend({
	items: null,

	init() {
		this._super(...arguments);
		this.set('items', []);
	},
	
	select(options) {
		return this.get('items').findBy('product', options.product);
	},

	add(item) {
		this.get('items').pushObject(item);
	},

	update(options) {
		let item = this.get('items').findBy('product', options.product);
		Ember.set(item,'quantity', options.quantity);
	},

	remove(item) {
		this.get('items').removeObject(item);
	},

	empty() {
		this.get('items').setObjects([]);
	}
});
