import Component from '@ember/component';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  actions: {
  },
  didInsertElement() {
    this.set('codeToUse', this.code);
  }
});
