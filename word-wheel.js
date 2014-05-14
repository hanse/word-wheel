
function drawWordWheel(ctx, radius, words) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  radius = radius||100;
  var centerX = canvas.width/2;
  var centerY = canvas.height/2;

  ctx.strokeStyle = '#555';
  //ctx.arc(centerX, centerY, radius-20, 0, 2*Math.PI);
  ctx.stroke();

  var drawWord = function(word, angle) {
    ctx.save();
    ctx.translate(centerX, centerY);
    if (angle > Math.PI/2 && angle < 3*Math.PI/2) {
      ctx.rotate(angle+Math.PI);
      ctx.textAlign = 'end';
      ctx.fillText(word, -radius, 0);
    } else {
      ctx.rotate(angle);
      ctx.textAlign = 'start';
      ctx.fillText(word, radius, 0);
    }
    ctx.restore();
  }

  var angleStep = (Math.PI*2)/words.length;
  words.forEach(function(word, i) {
    drawWord(word, i*angleStep);
  });
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.font = '16px Verdana';
ctx.fillStyle = '#fff';

var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  drawWordWheel(ctx, document.querySelector('input').value|0, document.querySelector('textarea').value.split(/ +/));
  return false;
});
