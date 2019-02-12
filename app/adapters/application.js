import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4545',
  namespace: 'api',
  pathForType: function(type) {
    return Ember.String.pluralize(underscore(type));
  }
})
