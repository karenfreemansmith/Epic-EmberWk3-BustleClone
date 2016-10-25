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
        tags: this.get('tags'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  },
  beforeModel: function(){
    this._super(...arguments);
    if (typeof tinymce == 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  }
});
