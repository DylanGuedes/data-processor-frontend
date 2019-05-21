import Component from '@ember/component';

import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    if (this.resources.length < 2)
      this.set('disabled', 'disabled');
  },
  actions: {
    flipRight() {
      $('.ui.shape').shape('flip right')
    },
    flipLeft() {
      $('.ui.shape').shape('flip right')
    }
  }
});
