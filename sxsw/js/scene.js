
var curr = 0;
var home = document.querySelector('#home');
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var quad = document.querySelector('#quad');
var cutler = document.querySelector('#cutler');
var flagpole = document.querySelector('#flagpole');
var cornerstone = document.querySelector('#cornerstone');
var stops = [quad, cutler, flagpole, cornerstone];

home.addEventListener('click', function () {
  curr = 0; 
  setSky(curr);
});
next.addEventListener('click', function () {
  curr = curr + 1;
  if(curr > stops.length - 1){
   curr = 0; 
  }
  setSky(curr);
});
prev.addEventListener('click', function () {
  curr = curr - 1;
  if(curr < 0){
   curr = stops.length -1; 
  }
  setSky(curr);
});

function setSky(curr){
  console.log(curr);
  stops.forEach(function(itm){
    itm.setAttribute('visible', 'false');
  });
  stops[curr].setAttribute('visible', 'true');
}
