import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  actions: {
    createScript() {
      const title = get(this, 'title');
      const path = get(this, 'path');
      const code = get(this, 'code');
      const lang = get(this, 'language');
      const store = get(this, 'store');

      let scriptInstance = store.createRecord('job-script', {
        title: title,
        path: path,
        code: code,
        language: lang
      });

      scriptInstance.save().then(() => {
        this.transitionToRoute('job-scripts.show', scriptInstance);
      });
    }
  }
});
