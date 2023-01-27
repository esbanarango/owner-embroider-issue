import { module, test } from 'qunit';
import { setupRenderingTest } from 'owner-embroider-issue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import TestComponent from 'owner-embroider-issue/components/test-component';

module('Integration | Component | test-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    this.set(
      'stubComponent',
      class extends TestComponent {
        color = 'red';
      }
    );
    await render(hbs`<this.stubComponent />`);

    assert.dom(this.element).hasText('red');
  });
});
