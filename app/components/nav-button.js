import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    $('.sidebar').slideToggle();
  }
});
