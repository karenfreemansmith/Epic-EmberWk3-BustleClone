import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this._super(...arguments);
    if (typeof tinymce == 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  },

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
