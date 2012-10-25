function Cube () {
	this.init();
}

Cube.prototype = {

	init: function () {
		this.createTimeline();
		this.createRenderer();
		this.createCamera();
		this.createScene();
		this.createObject();
		this.animate();
		this.tween();
	},

	createTimeline: function () {
		this.timeLine = new TimelineLite();
	},

	createRenderer: function () {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );
	},

	createCamera: function () {
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		this.camera.position.z = 400;
	},

	createScene: function () {
		this.scene = new THREE.Scene();
	},

	createObject: function () {
		var geometry = new THREE.CubeGeometry( 200, 200, 200 );
		var texture = THREE.ImageUtils.loadTexture( 'images/crate.gif' );
		texture.anisotropy = this.renderer.getMaxAnisotropy();
		var material = new THREE.MeshBasicMaterial( { map: texture } );

		this.mesh = new THREE.Mesh( geometry, material );
		this.scene.add( this.mesh );
	},

	animate: function () {
		var self = this;
		requestAnimationFrame(function() {
			self.mesh.rotation.y += 0.01;
			self.mesh.rotation.x += 0.005;
			self.renderer.render( self.scene, self.camera );
			self.animate();
		});
	},

	tween: function () {
		this.timeLine.to(this.mesh.position, 1, { x: 300, y: 170, z: -180, ease:Strong.easeInOut, onComplete: this.reverseAnimation, onCompleteParams: [this] } );
	},

	reverseAnimation: function (self) {
		self.timeLine.reverse();
	}
};