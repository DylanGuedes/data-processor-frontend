import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    runJob(job) {
      var _this = this;
      let jobId = job.get('id');
      const url = `http://localhost:4000/api/processing_jobs/${jobId}/run`;
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
    }
  }
});
