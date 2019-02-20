import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  flashMessages: inject(),
  getSpecificParam: function() {
    var modelParams = this.get('model')['userParams'];
    if (modelParams.hasOwnProperty('schema')) {
      return modelParams['schema'];
    } else {
      return {}
    }
  },
  actions: {
    deleteParam(paramTitle) {
      var specificParams = this.get('model').userParams.schema;
      delete specificParams[paramTitle];
      var _this = this;
      this.get('model').save().then(function() {
        _this.flashMessages.add({
          type: 'negative',
          message: 'Param successfully deleted.'
        });
        _this.set('paramValue', "");
        _this.set('paramTitle', "");
      });
    }
  }
});
