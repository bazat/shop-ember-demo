import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  customer_name: attr('string'),
  customer_phone: attr('string'),
  order: attr('array')
});