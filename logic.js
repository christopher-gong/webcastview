chrome.extension.sendMessage({}, function(response) {
    console.log("hello world!")

    var z = document.getElementsByTagName('video')[0]
    var videoTags = document.getElementsByTagName('video')
    videoTags.forEach = Array.prototype.forEach;
    var x = 0
    
    function act() {
        videoTags.forEach(function(v) {
            // console.log("previous width: " + v.style.width)
            //console.log(transform('width', v.style.width))
            //v.style.width = transform('width', v.style.width)
            // console.log("new width: " + v.style.width)

            // console.log("previous height: " + v.style.height)
            //console.log(transform('height', v.style.height))
            //v.style.height = transform('height', v.style.height)
            // console.log("new height: " + v.style.height)

            //v.style.width = "640px"
            //v.style.height = "180px"
            if (x === 0) {
                v.style.zoom = 2
                v.style.top = '0px'
            }
            else if (x === 1) {
                //console.log('translateX(' + transform(v.style.width) + ')')
                v.style.transform = 'translateX(-' + transform(v.style.width) + ')'
            }
            else if (x === 2) {
                v.style.zoom = null
                v.style.top = transform(v.style.height)
                v.style.transform = 'translateX(0px)'
            }
            x = (x + 1) % 3
     })
}
    

    document.addEventListener('keydown', function(e) {
        e = e || window.event;
        if (e.keyCode === 83) {
            act();
        }
    });

    function transform(value) {
        console.log(PXtoInt(value) / 2 + 'px')
        return PXtoInt(value) / 2 + 'px'
        //if (transformation === 'width') {return PXtoInt(value) / 2 + 'px'}
        //else if (transformation === 'height') {return PXtoInt(value) / 2 + 'px'}
      }

      function PXtoInt(styleParam) {
        console.log(styleParam.substring(0, styleParam.length - 2))
        return parseInt(styleParam.substring(0, styleParam.length - 2))
      }
    

})