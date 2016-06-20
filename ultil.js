// ------------------------------
// Node Class
// ------------------------------

function Node(x, y, radius, color) {
  this.init(x, y, radius, color);
};

Node.prototype = {
  init : function(x, y, radius, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.radius = radius;
  },

  draw : function( ctx ) {
    ctx.beginPath();
    ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// -------------------------------------------

function collectNodes(canvas_w, canvas_h, center_x, center_y) {
  var nodes = [],
      w = 0,
      h = 0,
      size = 20;

  while( w < canvas_w - size ) {
    w += size;
    h = 0;

    while ( h < canvas_h - size ) {
      h += size;
      nodes.push({pos: [w, h], r: 5, color: 'yellow'});
    }
  }
  return nodes;
}

function layOutNodes(nodes, ctx){
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  nodes.forEach(function(n) {
    var node = new Node(n.pos[0] * Math.random(), n.pos[1] * Math.random(), n.r * Math.random(), n.color);
    node.draw(ctx);
  });
}

// todo:
function updateLayout(e) {
  var mouse = { x: e.clientX, y: e.clientY};

}

function resize() {
  var canvas = document.getElementById('nodes'),
      ctx = canvas.getContext( '2d' );

  canvas.width = w = innerWidth;
	canvas.height = h = 640;


  // canvas.addEventListener('mousemove', updateLayout, false);

  window.setInterval(function(){
    layOutNodes(collectNodes(w, h), ctx);
  }, 30);

};

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
