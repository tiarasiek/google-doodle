// Get random number
var max = 3;
var numRand = Math.floor(Math.random() * max );
console.log(numRand)

// Change class on body element
$('#stage').addClass('bg' + numRand);

// Draw SVG
// Store SVG points
var google = $('#spiderwebs').drawsvg({
  duration : 4000,
  reverse: true,
  stagger: 60
});


// Animate SVG points
google.drawsvg('animate');