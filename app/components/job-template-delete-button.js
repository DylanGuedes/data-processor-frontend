import Component from '@ember/component';

export default Component.extend({
  tagName: "span",
  actions: {
    deleteTemplate() {
      let template = this.get('template');
      template.destroyRecord();
    }
  }
});
