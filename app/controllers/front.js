import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    menuDrop: function() {
      console.log("menuDrop");

    },
    downloadPressed: function() {
      console.log("downloadPressed");
    }
  }
});
