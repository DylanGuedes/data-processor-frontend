import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr(),
  userParams: DS.attr(),
  scheduledJobs: DS.attr(),
  jobScript: DS.belongsTo('job-script'),
  getSchemaParams: computed('userParams', function() {
    return this.userParams['schema'];
  }),
  getInterscityParams: computed('userParams', function() {
    return this.userParams['interscity'];
  }),
  getFunctionalParams: computed('userParams', function() {
    return this.userParams['functionalParams'];
  })
});
