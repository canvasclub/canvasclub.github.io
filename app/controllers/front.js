import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clickedSounds: function() {
      // console.log("clickedSounds");

      if (this.isActived === true){
        this.set("isActived", false);
        console.log(this.get("isActived"));
      }else{
        this.set("isActived", true);
        console.log(this.get("isActived"));
      }

    },
    isActived: true,
    isDownloadSong: false,
    clickedAway: function(){
      console.log("clickedAway");
    },
    clickedDownloadSong: function(){
      this.set("isDownloadSong", true);
    },
    exitDownloadSong: function(){
      this.set("isDownloadSong", false);
    }
    // downloadPressed: function() {
    //   console.log("downloadPressed");
    // }
  }
});
