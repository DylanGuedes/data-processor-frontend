import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  actions: {
    createScript() {
      let scriptInstance = store
        .createRecord('job-script', {
          title: get(this, 'title'),
          path: get(this, 'path'),
          code: get(this, 'code'),
          language: get(this, 'language')
        });

      scriptInstance
        .save()
        .then(() => {
          this.transitionToRoute('job-scripts.show', scriptInstance);
        });
    }
  }
});
