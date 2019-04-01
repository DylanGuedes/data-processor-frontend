import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if (this.resources.length < 2)
      this.set('disabled', 'disabled');
  },
  tagName: "span"
});
