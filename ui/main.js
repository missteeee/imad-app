console.log('Loaded!');
var element=document.getElementById('main text');
element.innerHTML='new value';
var img=document.getElementbyId('madi');
img.onclick = function() {
  img.style.marginLeft = '100px'; 
  var interval=setInterval(moveRight,100); 
    
};