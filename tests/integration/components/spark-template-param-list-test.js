import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import { run } from "@ember/runloop";
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | spark-template-param-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const attrs = {
      params: {
        schema: {temperature: 'double'},
        interscity: {capability: "geolocalization"},
        functionalParams: {features: "lat,lon"},
        publishStrategy: {name: "myfile", format: "csv"}
      },
      handler: "Elixir.DataProcessor.Handlers.StatisticalDescriber",
      scheduledJobs: 0,
      title: "Statistical Describer template"
    }
    const template = run(() => {
      let _template= this.owner.lookup('service:store').createRecord('spark-template', attrs)
      _template.save()
      return _template;
    });
    this.set('sparkTemplateStub', template);
    this.set('prmsStub', template.get('params')["schema"]);

    await render(hbs`<SparkTemplateParamList @paramType="schema" @prms={{this.prmsStub}} @model={{this.sparkTemplateStub}}/>`);
    await fillIn(this.element.querySelector('.param-title-input'), 'abctitle');
    await fillIn(this.element.querySelector('.param-value-input'), 'abcvalue');
    await click(this.element.querySelector('.add-param'));
    assert.equal(this.owner.lookup('service:store').findAll('spark-template').length, 1);
  });
});
