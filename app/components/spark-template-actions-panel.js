import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  actions: {
    deleteTemplate() {
      this.get('tl').deleteRecord();
      if (this.get('tl').get('isDeleted')) {
        this.get('tl').save().then(() => {
          this.get('router').transitionTo('spark-templates.index');
        });
      }
    }
  }
});
