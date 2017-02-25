import { test } from 'qunit';
import moduleForAcceptance from 'epm/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | web accounts');

test('visiting /web-accounts', function(assert) {
  visit('/web-accounts');

  andThen(function() {
    assert.equal(currentURL(), '/web-accounts');
  });
});
