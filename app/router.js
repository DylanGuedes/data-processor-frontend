import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('spark-templates', function() {
    this.route('index');
    this.route('show', { path: '/:tl_id' }, function() {
      this.route('schema_params');
      this.route('interscity_params');
      this.route('functional_params');
      this.route('publish_strategy_params');
    });
  });
});

export default Router;
