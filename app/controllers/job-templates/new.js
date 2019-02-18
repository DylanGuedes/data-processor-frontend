import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTemplate() {
      const title = this.get('title');
      const scriptId = this.get('scriptId');

      let script = this.store.peekRecord('job-script', scriptId);

      let template = this.store.createRecord('job-template', {
        title: title, jobScript: script
      });
      template.save().then(() => {
        this.transitionToRoute('job-templates.show', template);
      });
    }
  }
});
