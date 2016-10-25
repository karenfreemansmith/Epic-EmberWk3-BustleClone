import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    close() {
      $('.sidebar').slideUp();
    }
  }
});
