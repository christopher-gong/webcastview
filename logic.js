chrome.extension.sendMessage({}, function(response) {
    console.log("hello world!")

    var videoTags = document.getElementsByTagName('video')
    videoTags.forEach = Array.prototype.forEach;
    var x = 2
    var fullscreen = false
    
    function act(x) {
        videoTags.forEach(function(v) {
            if (x === 0) {
                v.style.zoom = 2
                v.style.top = '0px'
            }
            else if (x === 1) {
                v.style.transform = 'translateX(-' + transform(v.style.width) + ')'
            }
            else if (x === 2) {
                setTimeout(function() {
                    v.style.zoom = null
                    v.style.top = transform(v.style.height)
                    v.style.transform = 'translateX(0px)'
                }, 50);
            }
            
     })
}
    

    document.addEventListener('keydown', function(e) {
        e = e || window.event;
        if (e.keyCode === 83) {
            x = (x + 1) % 3
            act(x)
        }
        fullscreenCheck(document)
    });

    document.addEventListener('click', function(e) {
        e = e || window.event;
        fullscreenCheck(document)
    });

    function fullscreenCheck(document) {
        console.log("fullscreen check:")
        setTimeout(function() {
            if ((document.webkitFullscreenElement != null) != fullscreen) {
                fullscreen = !fullscreen
                act(2)
                act(x)
            }
        }, 1000); //returns too quickly, needs a wait
        //@src https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
    }

    function transform(value) {
        console.log(PXtoInt(value) / 2 + 'px')
        return PXtoInt(value) / 2 + 'px'
      }

      function PXtoInt(styleParam) {
        console.log(styleParam.substring(0, styleParam.length - 2))
        return parseInt(styleParam.substring(0, styleParam.length - 2))
      }
    

})