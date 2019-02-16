import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createScript() {
      const title = this.get('title');
      const path = this.get('path');
      const code = this.get('code');
      const lang = this.get('language');

      let scriptInstance = this.store.createRecord('job-script', {
        title: title,
        path: path,
        code: code,
        language: lang
      });

      scriptInstance.save().then(() => {
        this.transitionToRoute('job-scripts.show');
      });
    }
  }
});
