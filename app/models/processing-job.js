import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  uuid: DS.attr(),
  jobTemplate: DS.belongsTo('job-template'),
  jobState: DS.attr(),
  log: DS.attr(),
  updatedAt: DS.attr(),
  isLoading: false,
  canRunJob: computed('jobState', function() {
    const validStates = ["unknown", "finished", "error"];
    if (validStates.includes(this.jobState)) {
      return true;
    } else {
      return false;
    }
  }),
  jobStateColor: computed('jobState', function() {
    if (this.jobState == "finished") {
      return "green";
    } else {
      return "yellow";
    }
  }),
  jobStateIcon: computed('jobState', function() {
    if (this.jobState == "finished") {
      return "check";
    } else {
      return "exclamation";
    }
  }),
  hasLog: computed('jobState', function() {
    const validStates = ["finished", "error"];
    if (validStates.includes(this.jobState)) {
      return true;
    } else {
      return false;
    }
  })
});
