const hiiriLiikkuu =(ev)=>{
  let x= ev.clientX;
  let y= ev.clientY;
  let cX= x;
  let cY =y-(y);
  let coordinatesTop = document.querySelector('#hiiri');
  let  coordinatesCenter = document.querySelector('#hiirikeskitetty');
  coordinatesTop.textContent = "From the top left X: " + x +' , Y: '+ y;
  coordinatesCenter.textContent = "From the center X: " + cX +' , Y: '+ cY;
};

window.addEventListener('mousemove', hiiriLiikkuu);

/*function castParallax() {

  var opThresh = 350;
  var opFactor = 750;

  **************
    $(window).scroll(function(){
      var windowScroll = $(window).scrollTop();

      $('.keyart_layer.parallax').each(function(){
        var $layer = $(this);
        var yPos = -(windowScroll * $layer.data('speed') / 100);
        $layer.css({
          "transform" : "translate3d(0px, " + yPos + "px, 0px)"
        });

      });


      var backgroundOpacity = (windowScroll > opThresh ? (windowScroll - opThresh) / opFactor : 0);
      $('#keyart-scrim').css('opacity', backgroundOpacity);
    });

  *********************************
  window.addEventListener("scroll", function(event){

    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute('data-speed');
      var yPos = -(top * speed / 100);
      layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

    }
  });


}

function dispelParallax() {
  $("#nonparallax").css('display','block');
  $("#parallax").css('display','none');
}

function castSmoothScroll() {
  $.srSmoothscroll({
    step: 80,
    speed: 300,
    ease: 'linear'
  });
}



function startSite() {

  var platform = navigator.platform.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();

  if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 )
  {
    dispelParallax();
  }

  else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
  {
    castParallax();
    if ($.browser.webkit)
    {
      //castSmoothScroll();
    }
  }

  else
  {
    castParallax();
  }

}

document.body.onload = startSite();
*/