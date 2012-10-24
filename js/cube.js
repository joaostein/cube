function Cube () {
  this.init();

}

Cube.prototype = {

  init: function () {
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

    requestAnimationFrame( this.animate );
  },

  animate: function () {
    cube.mesh.rotation.x += 0.005;
    cube.mesh.rotation.y += 0.01;

    cube.renderer.render( cube.scene, cube.camera );
    requestAnimationFrame( cube.animate );
  }
};


// function animate() {
//       requestAnimationFrame( animate );

//       cube.mesh.rotation.x += 0.005;
//       cube.mesh.rotation.y += 0.01;

//       cube.renderer.render( cube.scene, cube.camera );
// }