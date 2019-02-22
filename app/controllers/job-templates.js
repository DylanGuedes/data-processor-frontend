import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tutorial: service(),
  actions: {
    startTutorial() {
      this.get('tutorial').set('ongoingTutorial', false);
      const store = this.get('store');
      if (store == undefined)
        throw new Error("Undefined store.");

      const _this = this;

      store.query('job-template', {
        filter: {
          title: "Tutorial's Template"
        }
      }).then(function(tutorialTemplates) {
        const template = tutorialTemplates.get("firstObject");
        _this.transitionToRoute('job-templates.show.schema_params', template);
        _this.get('tutorial').set('ongoingTutorial', true);
      }).catch(function() {
        throw new Error("Data-Collector is not available.");
      });
    }
  }
});
