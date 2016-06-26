import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  customerName: faker.commerce.productName,
  customerPhone: (i) => faker.random.number({min: 1, max: 10}),
  order: (i) => faker.commerce.price(10, 100) * 100
});