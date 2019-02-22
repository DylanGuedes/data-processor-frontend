import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list job templates', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /job-templates', async function(assert) {
    await visit('/job-templates/index');

    assert.equal(currentURL(), '/job-templates/index');
  });
});
