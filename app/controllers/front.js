import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clickedSounds: function() {
      // console.log("clickedSounds");

      if (this.isActived === true){
        this.set("isActived", false)
        console.log(this.get("isActived"))
      }else{
        this.set("isActived", true)
        console.log(this.get("isActived"))
      }

    },
    isActived: true,
    clickedAway: function(){
      console.log("clickedAway");
    }
    // downloadPressed: function() {
    //   console.log("downloadPressed");
    // }
  }
});
