import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list spark templates', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-spark-templates', async function(assert) {
    await visit('/spark-templates/index');

    assert.equal(currentURL(), '/spark-templates/index');
  });
});
