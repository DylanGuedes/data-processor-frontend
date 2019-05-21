import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    $(".ui.accordion").accordion();

    this.set('unescapedLog', htmlSafe(this.log));
  }
});
