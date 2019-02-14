import Component from '@ember/component';

export default Component.extend({
  getSpecificParam: function() {
    var modelParams = this.get('model')['params'];
    if (modelParams.hasOwnProperty(this.get('paramType'))) {
      return modelParams[this.get('paramType')];
    } else {
      return {}
    }
  },
  actions: {
    addParam() {
      let paramValue = this.get('paramValue');
      let paramTitle = this.get('paramTitle');
      let specificParams = this.getSpecificParam();
      let paramType = this.get('paramType');
      let model = this.get('model');
      specificParams[paramTitle] = paramValue;
      var allParams = model.params;
      allParams[paramType] = specificParams;
      model.set('params', allParams);
      model.save();
      this.set('paramValue', "");
      this.set('paramTitle', "");
    },

    deleteParam(paramTitle) {
      var specificParams = this.get('model')['params'][this.get('paramType')];
      delete specificParams[paramTitle];
      var allParams = this.get('model').params;
      allParams[this.get('paramType')] = specificParams;
      this.get('model').set('params', allParams);
      this.get('model').save();
      this.set('paramValue', "");
      this.set('paramTitle', "");
    }
  }
});
