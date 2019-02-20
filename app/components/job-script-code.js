import Component from '@ember/component';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  didInsertElement() {
    this.set('codeToUse', htmlSafe(Prism.highlight(this.get('code'), Prism.languages.python, 'python')));
  }
});
