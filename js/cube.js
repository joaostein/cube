function Cube () {
	this.init();
}
Cube.prototype = {
	init: function () {
		this.timeLine = new TimelineLite();

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		this.camera.position.z = 400;

		this.scene = new THREE.Scene();

		var geometry = new THREE.CubeGeometry( 200, 200, 200 );
		var material = new THREE.MeshBasicMaterial({ color: 0xCC0000 });

		this.mesh = new THREE.Mesh( geometry, material );
		this.scene.add( this.mesh );

		this.renderer.render( this.scene, this.camera );

		this.timeLine.to(this.mesh.position, 1, { x: 300, y: 170, z: -180, ease:Strong.easeInOut, onComplete: this.reverseAnim, onCompleteParams: [this] } );

		this.animate();
	},

	animate: function () {
		var self = this;
		setInterval(function() {
			self.mesh.rotation.y += 0.01;
			self.mesh.rotation.x += 0.005;
			self.renderer.render( self.scene, self.camera );
		}, 1000/60);
	},

	reverseAnim: function (self) {
		self.timeLine.reverse();
	}
};