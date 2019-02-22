import DS from 'ember-data';
import { dasherize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },
  keyForRelationship(key) {
    return dasherize(key);
  }
});
