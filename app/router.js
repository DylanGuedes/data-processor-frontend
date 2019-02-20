import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tutorial');
  this.route('jobs');
  this.route('handlers');
  this.route('job-scripts', function() {
    this.route('index');
    this.route('new');
    this.route('show', { path: '/:id' }, function() {
    });
  });
  this.route('job-templates', function() {
    this.route('index');
    this.route('new');
    this.route('show', { path: '/:tl_id' }, function() {
      this.route('extra_info');
      this.route('schema_params');
      this.route('interscity_params');
      this.route('functional_params');
      this.route('publish_strategy_params');
      this.route('actions');
    });
  });
});

export default Router;
