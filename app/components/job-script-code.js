import Component from '@ember/component';

export default Component.extend({
  actions: {
  },
  didInsertElement() {
    this.set('codeToUse', this.code);
  }
});
