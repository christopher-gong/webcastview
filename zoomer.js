chrome.extension.sendMessage({}, function(response) {
    console.log("hello world!");
    //alert("test alert");

    var metaContents = document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string');
    var likeButton = document.getElementsByClassName('style-scope ytd-menu-renderer force-icon-button style-text');
    var rightControls = document.getElementsByClassName('ytp-right-controls');
    var videoTags = document.getElementsByTagName('video');
    videoTags.forEach = Array.prototype.forEach;
    var zoomLevels = ["left", "right", "reset"];
    var zoomLevel;
    var fullscreen = false;
    console.log(metaContents)
    console.log(likeButton)
    console.log(rightControls[0].outerHTML)
    //rightControls[0].outerHTML = '<div class="ytp-right-controls"><button class="ytp-subtitles-button ytp-button" title="Subtitles/closed captions" style="" aria-pressed="false"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-17"></use><path d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z" fill="#fff" id="ytp-id-17"></path></svg></button><button class="ytp-subtitles-button ytp-button" title="Subtitles/closed captions" style="" aria-pressed="false"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-17"></use><path d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z" fill="#fff" id="ytp-id-17"></path></svg></button><button class="ytp-button ytp-settings-button ytp-hd-quality-badge" aria-haspopup="true" aria-owns="ytp-id-18" title="Settings"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-19"></use><path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z" fill="#fff" id="ytp-id-19"></path></svg></button><button class="ytp-multicam-button ytp-button" title="Switch camera" aria-haspopup="true" style="display: none;"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-20"></use><path d="M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z" fill="#fff" id="ytp-id-20"></path></svg></button><button class="ytp-size-button ytp-button" title="Theater mode"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-21"></use><path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill="#fff" fill-rule="evenodd" id="ytp-id-21"></path></svg></button><button class="ytp-button" title="Play on TV" aria-haspopup="true" style=""><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-22"></use><path d="M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z" fill="#fff" id="ytp-id-22"></path></svg></button><button class="ytp-fullscreen-button ytp-button" title="Full screen"><svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-23"></use><path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-23"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-24"></use><path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-24"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-25"></use><path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-25"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-26"></use><path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-26"></path></g></svg></button></div>'
    
    function act(zL) {
        videoTags.forEach(function(v) {
            if (zL === "left") {
                console.log('left')
                //zoom left
                v.style.zoom = 2
                if (fullscreen == true) {
                    v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight / 2 - PXtoInt(v.style.height)) / 2)
                } else {
                    v.style.top = '0px'
                }
            }
            else if (zL === "right") {
                console.log('right')
                //zoom right
                v.style.zoom = 2
                v.style.transform = 'translateX(-' + transform(v.style.width) + ')'
                if (fullscreen == true) {
                    v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight / 2 - PXtoInt(v.style.height)) / 2)
                } else {
                    v.style.top = '0px'
                }
            }
            else if (zL === "reset") {
                console.log('reset')
                //reset to normal
                v.style.zoom = null
                if (fullscreen == true) {
                    v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight - PXtoInt(v.style.height)) / 2)
                } else {
                    v.style.top = transform(v.style.height)
                }
                v.style.transform = 'translateX(0px)'
            }
            
     })
}
    

    document.addEventListener('keydown', function(e) {
        //fullscreenCheck()
        e = e || window.event;
        if (e.keyCode === 83) {//key is 's'
            if (metaContents[0].innerHTML === 'Webcast Departmental') {
                zoomLevel = zoomLevels[(zoomLevels.indexOf(zoomLevel) + 1) % zoomLevels.length]
            } else if (likeButton.length > 0) { //if there is a "like" button (yt video page) and it is not a berkeley webcast
                alert("Sorry, zooming is only supported for Berkeley webcasts.")
            }
            //go to next zoomlevel
        }
        act(zoomLevel)
     });

    document.addEventListener('click', function(e) {
        //fullscreenCheck()
        e = e || window.event;
        act(zoomLevel)
    });

    function fullscreenCheck() {
        if (((document.webkitFullscreenElement != null) && !fullscreen) || (document.webkitFullscreenElement === null && fullscreen)) {
            //if fullscreen is triggered for the first time
            if (fullscreen) {
                console.log("fullscreen has been untoggled.")
            } else {
                console.log("fullscreen has been toggled.")
            }
            fullscreen = !fullscreen
            //act(zoomLevel)
        }
    }



    function transform(value) {
        //takes in 'px' string, devides two and returns px string (to find center)
        //console.log(PXtoInt(value) / 2 + 'px')
        return PXtoInt(value) / 2 + 'px'
      }

    function InttoPX(styleParam) {
        return styleParam + 'px'
    }

    function PXtoInt(styleParam) {
       //console.log(styleParam.substring(0, styleParam.length - 2))
       return parseInt(styleParam.substring(0, styleParam.length - 2))
     }

     function printDebugInfo(v) {
         console.log("Debug info:")
         console.log("regular width: " + v.style.width)
         console.log("regular height: " + v.style.height)
         if (document.webkitFullscreenElement == null) {
             console.log("not in fullscreen")
         } else {
            console.log("fullscreen width:" + document.webkitFullscreenElement.offsetWidth)
            console.log("fullscreen height: " + document.webkitFullscreenElement.offsetHeight)
         }
     }

     $(document).ready(function() {
        console.log("ready!");
    });

    $(window).on( "load", function() {
        console.log( "window loaded" );
    });

    $(window).resize(function() {
        fullscreenCheck();
        console.log("window changed")
        act(zoomLevel)
      });
})