import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr(),
  user_params: DS.attr(),
  handler: DS.attr(),
  scheduledJobs: DS.attr(),
  getSchemaParams: computed('params', function() {
    return this.params['schema'];
  }),
  getInterscityParams: computed('params', function() {
    return this.params['interscity'];
  }),
  getFunctionalParams: computed('params', function() {
    return this.params['functionalParams'];
  }),
  getPublishStrategy: computed('params', function() {
    return this.params['publishStrategy'];
  })
});
