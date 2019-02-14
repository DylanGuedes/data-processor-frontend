import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTemplate() {
      var handlTitle = this.get('templateHandl');
      var templateTitle = this.get('templateTitle');

      let tplate = this.store.createRecord('spark-template', {
        title: templateTitle, handler: handlTitle
      });
      tplate.save().then(() => {
        this.transitionToRoute('spark-templates.show', tplate);
      });
    }
  }
});
