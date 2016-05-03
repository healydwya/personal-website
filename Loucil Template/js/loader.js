'use strict';

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');

  var radius = canvas.width / 3;
  var angleStep = Math.PI * 2 / 360;
  var theta = 0;

  //change frequencies for getting various curves
  var frequencyX = 5.0;
  var frequencyY = 5.0;

  window.requestAnimationFrame(draw);

  function draw() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
    context.beginPath();

    for (var angle = 0; angle < Math.PI * 2; angle += angleStep) {
      var x = Math.sin(angle * frequencyX + theta) * Math.cos(angle + theta) * radius;
      var y = Math.cos(angle * frequencyY) * Math.sin(angle + theta) * radius;
      if (angle === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    context.lineWidth = 4;
    context.strokeStyle = '#ffffff';
    context.stroke();
    context.closePath();

    theta += 0.03;
    window.requestAnimationFrame(draw);
  }
};
