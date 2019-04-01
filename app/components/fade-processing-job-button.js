import Component from '@ember/component';

export default Component.extend({
  actions: {
    fadeJob() {
      this.get('job').destroyRecord();
    }
  },
  tagName: "span"
});
