import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  code: DS.attr(),
  language: DS.attr(),
  path: DS.attr(),
  codeSample: DS.attr()
});
