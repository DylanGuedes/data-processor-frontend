import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  actions: {
    addTemplate() {
      const title = get(this, 'title');
      const scriptId = get(this, 'scriptId');

      this
        .store
        .findRecord('job-script', scriptId)
        .then((script) => {
          let template = this.store.createRecord('job-template', {
            title: title, jobScript: script
          });

          template
            .save()
            .then(() => {
              this.transitionToRoute('job-templates.show', template);
            });
        });
    }
  }
});
