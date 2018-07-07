chrome.extension.sendMessage({}, function(response) {
    console.log("hello world!")

    var videoTags = document.getElementsByTagName('video')
    videoTags.forEach = Array.prototype.forEach;
    var x = 2
    var fullscreen = false
    
    function act(x) {
        videoTags.forEach(function(v) {
            printDebugInfo(v)
            if (x === 0) {
                //zoom left
                v.style.zoom = 2
                if (fullscreen == true) {
                    v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight / 2 - PXtoInt(v.style.height)) / 2)
                } else {
                    v.style.top = '0px'
                }
            }
            else if (x === 1) {
                //zoom right
                v.style.zoom = 2
                if (fullscreen == true) {
                    v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight / 2 - PXtoInt(v.style.height)) / 2)
                } else {
                    v.style.top = '0px'
                }
                v.style.transform = 'translateX(-' + transform(v.style.width) + ')'
            }
            else if (x === 2) {
                //reset to normal
                setTimeout(function() {
                    v.style.zoom = null
                    if (fullscreen == true) {
                        v.style.top = InttoPX((document.webkitFullscreenElement.offsetHeight - PXtoInt(v.style.height)) / 2)
                    } else {
                        v.style.top = transform(v.style.height)
                    }
                    v.style.transform = 'translateX(0px)'
                }, 50);
            }
            
     })
}
    

    document.addEventListener('keydown', function(e) {
        e = e || window.event;
        if (e.keyCode === 83) {
            x = (x + 1) % 3
        }
        // setTimeout(function() {
        // act(x)
        // fullscreenCheck(document)
        // }, 1000);
        // above fixes alt tab error, but isnt clean. dont know why it happens.
        act(x)
        fullscreenCheck(document)
     });

    document.addEventListener('click', function(e) {
        e = e || window.event;
        act(x)
        fullscreenCheck(document)
    });

    function fullscreenCheck(document) {
        //console.log("fullscreen check:")
        setTimeout(function() {
            if (((document.webkitFullscreenElement != null) && !fullscreen) || (document.webkitFullscreenElement === null && fullscreen)) {
                //if fullscreen is triggered for the first time
                fullscreen = !fullscreen
                //act(2)
                setTimeout(function() {act(x)}, 20);
            }
        }, 200); //returns too quickly, needs a wait
        //@src https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
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
    

})