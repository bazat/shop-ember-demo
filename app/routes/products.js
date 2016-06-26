import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  cart: Ember.inject.service('shopping-cart'),
  actions: {
    createProduct(options) {
      const name = options.name;
      const quantity = options.quantity;
      const price = options.price;

      this.store.createRecord('product', {
        name,
        quantity,
        price
      }).save();
    },
    updateProduct(product) {
      product.save();
    },
    deleteProduct(product) {
      product.destroyRecord();
    },
    updateCart(options) {
      let type = options.type;
      let product = options.product;
      let cartItem = this.get('cart').select({product});

      if(cartItem){
        let quantity;

        switch(type){
          case 'value':
            quantity = options.value;
            break;
          case 'decrease':
            quantity = cartItem.quantity - 1;
            break;
          default:
            quantity = cartItem.quantity + 1;
        }

        if(quantity <= 0){
          this.get('cart').remove(cartItem);
          return;
        }
        if(quantity > product.get('quantity')){
          quantity = product.get('quantity');
        }
        this.get('cart').update({
          quantity,
          product
        });
      }
      else{
        this.get('cart').add({
          quantity: type === 'value' ? options.value : 1,
          product
        });
      }
    }
  }
});