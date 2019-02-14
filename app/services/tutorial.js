import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('tutorial-step', 0);
    this.set('ongoingTutorial', false);
  }
});
