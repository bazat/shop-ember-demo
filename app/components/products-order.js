import Ember from 'ember';

export default Ember.Component.extend({
	customerName: '',
	customerPhone: '',
	isEmptyRequiredField: true,
	observeCustomerName: function(){
		this.set('isEmptyRequiredField', !this.customerName || !this.customerPhone);
	}.observes('customerName'),
	observeCustomerPhone: function(){
		this.set('isEmptyRequiredField', !this.customerName || !this.customerPhone);
	}.observes('customerPhone'),
	input(e) {
		let target = e.target;
		if(target.name === 'customerPhone'){
			target.value = target.value.replace(/[^0-9\.]/g,'');
		}
	},
	actions: {
		createOrder() {
			if(!this.customerName || !this.customerPhone){
				return;
			}
			this.sendAction('createOrder', this.customerName, this.customerPhone);
			this.set('customerName', '');
			this.set('customerPhone', '');
		}
	}
});