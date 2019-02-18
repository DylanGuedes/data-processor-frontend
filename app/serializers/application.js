import DS from 'ember-data';
import { decamelize, camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return decamelize(attr);
  },
  keyForRelationship(key) {
    return decamelize(key);
  }
});
