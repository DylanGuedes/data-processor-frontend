import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTemplate() {
      const title = this.get('title');
      const scriptId = this.get('scriptId');

      this.store.findRecord('job-script', scriptId).then((script) => {

        let template = this.store.createRecord('job-template', {
          title: title, jobScript: script
        });

        template.save().then(() => {
          this.transitionToRoute('job-templates.show', template);
        });
      });
    }
  }
});
