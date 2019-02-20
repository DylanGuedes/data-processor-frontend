import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  flashMessages: inject(),
  getSpecificParam: function() {
    var modelParams = this.get('template')['userParams'];
    if (modelParams.hasOwnProperty('schema')) {
      return modelParams['schema'];
    } else {
      return {}
    }
  },
  actions: {
    addParam() {
      const paramValue = this.get('paramValue');
      const paramTitle = this.get('paramTitle');
      let specificParams = this.getSpecificParam();
      const _this = this;

      specificParams[paramTitle] = paramValue;
      this.get('template').save().then(function() {
        _this.flashMessages.success('Successfully saved!');
      });
    },
  }
});
