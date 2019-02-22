import DS from 'ember-data';

export default DS.Model.extend({
  uuid: DS.attr(),
  jobTemplate: DS.belongsTo('job-template')
});
