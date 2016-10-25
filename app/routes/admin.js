import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('articles');
  },

  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('articles', params);
      newArticle.save();
      this.transitionTo('admin');
    },

    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
