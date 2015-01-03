import Ember from 'ember';

export default Ember.View.extend({
  click: function(evt){

    if ($(evt.target).hasClass('btn-download')){
      this.get('controller').set("isDownloadSong", true);
    }

  }
});
