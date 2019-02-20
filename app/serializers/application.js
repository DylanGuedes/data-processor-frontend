import DS from 'ember-data';
import { decamelize, camelize, dasherize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },
  keyForRelationship(key) {
    return dasherize(key);
  }
});
