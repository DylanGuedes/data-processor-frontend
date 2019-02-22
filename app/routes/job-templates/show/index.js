import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('job-templates.show.actions');
  }
});
