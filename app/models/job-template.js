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
    return this.userParams['functional'];
  }),
  schemaCount: computed('userParams', function() {
    if (this.userParams.hasOwnProperty('schema')) {
      return Object.keys(this.userParams['schema']).length;
    } else {
      return 0;
    }
  }),
  interscityCount: computed('userParams', function() {
    if (this.userParams.hasOwnProperty('interscity')) {
      return Object.keys(this.userParams['interscity']).length;
    } else {
      return 0;
    }
  }),
  functionalCount: computed('userParams', function() {
    if (this.userParams.hasOwnProperty('functional')) {
      return Object.keys(this.userParams['functional']).length;
    } else {
      return 0;
    }
  })
});
