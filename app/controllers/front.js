import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    downloadPressed: function() {
      console.log("downloadPressed");
      // new GumroadOverlay("https://gum.co/KdhT?wanted=true&locale=true", 'product');
    }
  }
});
