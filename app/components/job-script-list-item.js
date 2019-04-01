import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeScript() {
      this.get('script').destroyRecord();
    }
  },
  tagName: "span"
});
