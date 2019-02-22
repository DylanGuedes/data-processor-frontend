import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    const classToUse = `ui circular inverted ${this.color} button icon`
    this.set('classToUse', classToUse);
  }
});
