import Component from '@ember/component';

export default Component.extend({
  getSpecificParam: function() {
    var modelParams = this.get('model')['userParams'];
    if (modelParams.hasOwnProperty(this.get('paramType'))) {
      return modelParams[this.get('paramType')];
    } else {
      return {}
    }
  },
  actions: {
    addParam() {
      const paramValue = this.get('paramValue');
      const paramTitle = this.get('paramTitle');
      let specificParams = this.getSpecificParam();
      const paramType = this.get('paramType');
      let model = this.get('model');
      specificParams[paramTitle] = paramValue;
      var allParams = model.userParams;
      allParams[paramType] = specificParams;
      model.set('userParams', allParams);
      model.save();
      this.set('paramValue', "");
      this.set('paramTitle', "");
    },

    deleteParam(paramTitle) {
      var specificParams = this.get('model')['userParams'][this.get('paramType')];
      delete specificParams[paramTitle];
      var allParams = this.get('model').userParams;
      allParams[this.get('paramType')] = specificParams;
      this.get('model').set('userParams', allParams);
      this.get('model').save();
      this.set('paramValue', "");
      this.set('paramTitle', "");
    }
  }
});
