import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.commerce.productName,
  quantity: (i) => faker.random.number({min: 1, max: 10}),
  price: (i) => faker.commerce.price(10, 100) * 100,
  cart: 0
});