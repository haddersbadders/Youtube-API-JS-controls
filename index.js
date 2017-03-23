// Youtube Stuff //

var tag = document.createElement('script');

     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     // 3. This function creates an <iframe> (and YouTube player)
     //    after the API code downloads.
     var player;
     function onYouTubeIframeAPIReady() {
       Vplayer = new YT.Player('player', {
         height: '390',
         width: '640',
         videoId: 'SzMChncXTgA',
         playerVars: { 'autoplay': 0, 'controls': 0 },
         events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
         }
       });
     }

     // 4. The API will call this function when the video player is ready.
     function onPlayerReady(event) {
       event.target.pauseVideo();
     }

     // 5. The API calls this function when the player's state changes.
     //    The function indicates that when playing a video (state=1),
     //    the player should play for six seconds and then stop.
     var done = false;
     function onPlayerStateChange(event) {
       if (event.data == YT.PlayerState.PLAYING && !done) {
        //  setTimeout(stopVideo, 6000);
         done = true;
       }
     }
     function stopVideo() {
       Vplayer.stopVideo();
     }



  // var v = document.getElementById("sparkVideo");

  function playVideo(){
    Vplayer.playVideo();
  }
  function pauseVideo(){
    Vplayer.pauseVideo();
  }

function stopVideo(){
  Vplayer.stopVideo();

}
function muteVideo(){
  Vplayer.mute = Vplayer.unMute;
}
