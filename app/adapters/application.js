import DS from 'ember-data';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4000',
  namespace: 'api',
  pathForType: function(type) {
    return pluralize(underscore(type));
  }
})
