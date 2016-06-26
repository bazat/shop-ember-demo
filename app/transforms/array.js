import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if (Ember.isArray(serialized)) {
      return Ember.A(serialized);
    } else {
      return Ember.A();
    }
  },

  serialize(deserialized) {
    if (Ember.isArray(deserialized)) {
      return Ember.A(deserialized);
    } else {
      return Ember.A();
    }
  }
});