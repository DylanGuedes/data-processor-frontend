import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    scheduleJob() {
      var _this = this;
      let templateId = this.get('model').id;
      const url = `http://localhost:4000/api/job_templates/${templateId}/schedule`;
      $.ajax({
        url: url,
        type: "POST",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
      }).then(function(){
        _this.transitionToRoute('processing-jobs.index');
      }).catch(function(){
      });
    },
    cloneTemplate() {
      var _this = this;
      let templateId = this.get('model').id;
      const url = `http://localhost:4000/api/job_templates/${templateId}/clone`;
      $.ajax({
        url: url,
        type: "POST",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
      }).then(function(){
        _this.transitionToRoute('job-templates.index');
      }).catch(function(){
      });
    },
    removeTemplate() {
    }
  }
});
