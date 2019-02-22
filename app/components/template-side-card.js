import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if (this.get('idx') == 0) {
      this.$().addClass('active');
    }
  },
  classNames: ['side', 'ui']
});
