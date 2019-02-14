import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | spark-templates', function(hooks) {
  setupTest(hooks);

  test('ensure routes exists', function(assert) {
    let route = this.owner.lookup('route:spark-templates.index');
    assert.ok(route);
    route = this.owner.lookup('route:spark-templates.new');
    assert.ok(route);
  });
});
