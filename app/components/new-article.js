import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle() {
      var params = {
        author: this.get('author'),
        headline: this.get('headline'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
