const hiiriLiikkuu =(ev)=>{
  const wrapper = document.querySelector('#wrapper');
  const masa = document.querySelector(".kerros1");
  const alus = document.querySelector(".kerros2");
  let x= ev.clientX;
  let y= ev.clientY;
  let cX= wrapper.clientWidth/2;
  let cY = wrapper.clientHeight/2;
  let fromcX = cX -x;
  let fromcY = cY - y;
  let coordinatesTop = document.querySelector('#hiiri');
  let  coordinatesCenter = document.querySelector('#hiirikeskitetty');
  coordinatesTop.textContent = "From the top left X: " + x +' , Y: '+ y;
  coordinatesCenter.textContent = "From the center X: " + fromcX +' , Y: '+ fromcY;
  masa.style.transform = 'translateX('+ x/100+'%) translateY('+y/100+'%)';
  alus.style.transform = 'translateX('+x/-20+'%) translateY('+y/-50+'%)';
};

window.addEventListener('mousemove', hiiriLiikkuu);
