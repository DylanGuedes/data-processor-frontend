import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    flipRight() {
      $('.ui.shape').shape('flip right')
    },
    flipLeft() {
      $('.ui.shape').shape('flip right')
    }
  }
});
