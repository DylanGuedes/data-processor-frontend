import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    generateQuery() {
      const fileName = this.get('fileName');
      const fileFormat = this.get('fileFormat');
      const query = this.get('sqlQuery');
      const capability = this.get('capability');
      const url = `http://localhost:4000/api/mount_query_script`;

      const params = {
        filename: fileName,
        fileformat: fileFormat,
        query: query,
        capability: capability
      }

      $.ajax({
        url: url,
        type: "POST",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json'
        },
        data: JSON.stringify(params)
      }).then(function(){

      }).catch(function(){

      });
    },
    cloneTemplate() {
    }
  }
});
