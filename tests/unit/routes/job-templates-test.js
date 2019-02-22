import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | job-templates', function(hooks) {
  setupTest(hooks);

  test('ensure routes exists', function(assert) {
    let route = this.owner.lookup('route:job-templates.index');
    assert.ok(route);
    route = this.owner.lookup('route:job-templates.new');
    assert.ok(route);
  });
});
