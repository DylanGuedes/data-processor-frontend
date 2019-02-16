export default function() {
  this.namespace = '/api';
  this.urlPrefix = 'http://localhost:4000';

  this.get('/spark-templates', function() {
    return {
      data: [{
        type: 'spark-template',
        id: '1',
        attributes: {
          title: "k-Means template",
          handler: "Elixir.DataProcessor.Handlers.KMeans",
          params: {
            functional_params: {features: "lat,lon"},
            interscity: {capability: "geolocalization"},
            publish_strategy: {name: "myfile", format: "csv"},
            schema: {lon: "double", lat: "double"}
          },
          scheduledJobs: 0
        }
      }, {
        type: 'spark-template',
        id: '2',
        attributes: {
          title: "Statistical Describer template",
          handler: "Elixir.DataProcessor.Handlers.StatisticalDescriber",
          params: {
            functional_params: {features: "lat,lon"},
            interscity: {capability: "temperature"},
            publish_strategy: {name: "myfile2", format: "csv"},
            schema: {temperature: "double"}
          },
          scheduledJobs: 0
        }
      }]
    }
  });

  this.post('/spark-templates');
  this.patch('/spark-templates/:id');
}
