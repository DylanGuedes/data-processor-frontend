import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    scheduleJob() {
    },
    cloneTemplate() {
      var _this = this;
      let templateId = this.get('model').id;
      const url = `http://localhost:4000/api/job_templates/${templateId}/clone`;
      Ember.$.ajax({
        url: url,
        type: "POST",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
      }).then(function(resp){
        _this.transitionToRoute('job-templates.index');
      }).catch(function(error){
        console.log("job ot cloned!! err: ", error);
        // handle errors here
      });
    },
    removeTemplate() {
      console.log('removed');
    }
  }
});
