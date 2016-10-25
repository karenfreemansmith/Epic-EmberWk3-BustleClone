import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  headline: DS.attr(),
  image: DS.attr(),
});
