import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  uuid: DS.attr(),
  jobTemplate: DS.belongsTo('job-template'),
  jobState: DS.attr(),
  canRunJob: computed('jobState', function() {
    const validStates = ["unknown"];
    if (validStates.includes(this.jobState)) {
      return true;
    } else {
      return false;
    }
  }),
  hasLog: computed('jobState', function() {
    const validStates = ["finished"];
    if (validStates.includes(this.jobState)) {
      return true;
    } else {
      return false;
    }
  })
});
