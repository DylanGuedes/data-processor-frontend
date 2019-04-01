import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    logModal(job) {
      $('.ui.modal .content p').html('<code>'+job.log+'</code>');
      $('.ui.modal').modal('show');
    },
    runJob(job) {
      var _this = this;
      let jobId = job.get('id');
      job.set('isLoading', true);
      job.set('jobState', 'running');
      const url = `http://localhost:4000/api/processing_jobs/${jobId}/run`;
      $.ajax({
        url: url,
        type: "POST",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
      }).then(function(){
        job.set('jobState', 'finished');
        _this.transitionToRoute('processing-jobs.index');
      }).catch(function(){
      });
    }
  }
});
