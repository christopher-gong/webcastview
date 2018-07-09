chrome.extension.sendMessage({}, function(response) {
    console.log("hello world!");
    //alert("test alert");

    var metaContents = document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string')
    var videoTags = document.getElementsByTagName('video');
    videoTags.forEach = Array.prototype.forEach;
    var zoomLevels = ["left", "right", "reset"];
    var zoomLevel;
    var fullscreen = false;
    console.log(metaContents)
    
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
            } else {
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