import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';

export default Route.extend({
  actions: {
    didTransition() {
      let model = this.controller.get('model');
      console.log("mode l= > ", model);
        // $('.ui.search').search({
        //   source: model,
        //   fullTextSearch: true,
        //   searchFields: ['title']
        // });
    }
  },
  model() {
    return this.store.findAll('handler');
  }
});

