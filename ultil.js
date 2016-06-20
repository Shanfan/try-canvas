// ------------------------------
// Node Class
// ------------------------------

function Node(x, y, radius) {
  this.init(x, y, radius);
};

Node.prototype = {
  init : function(x, y, radius, color) {
    this.color = color || 'orange';

    this.x = x || 10.0;
    this.y = y || 10.0;
    this.radius = radius || 2;
  },

  draw : function( ctx ) {
    ctx.beginPath();
    ctx.arc( this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// -------------------------------------------

function collectNodes(canvas_w, canvas_h) {
  var nodes = [],
      w = 0,
      h = 0,
      size = 20;

  while( w < canvas_w - size ) {
    w += size;
    h = 0;

    while ( h < canvas_h - size ) {
      h += size;
      nodes.push({pos: [w, h], r: 1});
    }
  }
  return nodes;
}

function layOutNodes(nodes, ctx){
  nodes.forEach(function(n) {
    var node = new Node(n.pos[0], n.pos[1], n.r);
    node.draw(ctx);
  });
}

function updateLayout(e) {
  var mouse = { x: e.clientX, y: e.clientY};

}

function resize() {
  var canvas = document.getElementById('nodes'),
      ctx = canvas.getContext( '2d' );

  canvas.width = w = innerWidth;
	canvas.height = h = 640;

  layOutNodes(collectNodes(w, h), ctx);
  canvas.addEventListener('mousemove', updateLayout, false);
};
