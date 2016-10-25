import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('articles', params.articles_id);
  },actions: {
    close() {
      $('.sidebar').slideUp();
    }
  }
});
