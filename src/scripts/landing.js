const closer = 4;
const further = -4;

document.addEventListener('mousemove', (e) => {
  let positionX = e.pageX;
  let positionY = e.pageY;
  
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
  let moveX = (positionX - width/2) / (width/2) * closer;
  let moveY = (positionY - height/2) / (height/2) * closer;
 
  document.querySelector('.pupil-left').style.transform = 'translate(' + moveX + 'px,' + moveY + 'px)';
  document.querySelector('.pupil-right').style.transform = 'translate(' + moveX + 'px,' + moveY + 'px)';
  
  let cursor = document.querySelector('.cursor');
  cursor.setAttribute('style', 'top:' + positionY + 'px; left:' + positionX + 'px');
}, false);