import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    downloadPressed: function() {
      console.log("downloadPressed");
    }
  }
});
