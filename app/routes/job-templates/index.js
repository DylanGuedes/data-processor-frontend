import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop'
import $ from 'jquery';

export default Route.extend({
  actions: {
    didTransition() {
      scheduleOnce('afterRender', this, function () {
        $(".rating").rating();
      });
    }
  },
  model() {
    return this.store.findAll('job-template');
  }
});
