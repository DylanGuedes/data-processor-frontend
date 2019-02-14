import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tutorial: service(),
  actions: {
    startTutorial() {
      this.transitionToRoute('spark-templates.index');
      this.get('tutorial').set('ongoingTutorial', true);
    }
  }
});
