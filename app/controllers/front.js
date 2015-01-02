import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clickedSounds: function() {
      // console.log("clickedSounds");

      if (this.isActived === true){
        this.set("isActived", false);
        console.log(this.get("isActived"));
        this.set("isConnectActived", false);
      }else{
        this.set("isActived", true);
        console.log(this.get("isActived"));
        this.set("isConnectActived", false);
      }

    },
    isActived: true,
    isDownloadSong: false,
    isConnectActived: false,
    clickedAway: function(){
      console.log("clickedAway");
    },
    clickedDownloadSong: function(){
      this.set("isDownloadSong", true);
    },
    exitDownloadSong: function(){
      this.set("isDownloadSong", false);
    },
    clickedConnect: function(){

      if (this.isConnectActived === true){
        this.set("isConnectActived", false);
        this.set("isActived", false);
      }else{
        this.set("isConnectActived", true);
        this.set("isActived", false);
      }

    }
    // downloadPressed: function() {
    //   console.log("downloadPressed");
    // }
  }
});
