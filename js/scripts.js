// Get random number
var max = 2;
var numRand = Math.floor(Math.random() * max );
console.log(numRand)

// Change class on body element
$('#stage').addClass('bg' + numRand);

// Draw SVG
// Store SVG points
var google = $('#spiderweb').drawsvg({
  duration : 2500,
  reverse: true,
  stagger: 1000
});

// Animate SVG points
google.drawsvg('animate');