import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
import { GUI } from '/jsm/libs/dat.gui.module';
import Stats from '/jsm/libs/stats.module';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
// sets size of the window (currently full size of window)
renderer.setSize(window.innerWidth, window.innerHeight);
///////////////////////////////////////////////////////////////////////////
// Could append this to a canvas element in the html to display this somewhere specific
// const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('<id-canvas-tag>')
// const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas})
///////////////////////////////////////////////////////////////////////////
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 3;
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
const stats = Stats();
document.body.appendChild(stats.dom);
const gui = new GUI();
const cubeFolder = gui.addFolder("Cubey Wubey");
cubeFolder.add(cube.rotation, "x", 0, Math.PI * 2);
cubeFolder.add(cube.rotation, "y", 0, Math.PI * 2);
cubeFolder.add(cube.rotation, "z", 0, Math.PI * 2);
cubeFolder.open();
const cameraFolder = gui.addFolder("Camera Wamera");
cameraFolder.add(camera.position, "z", 0, 10);
cameraFolder.open();
// sometimes not needed if no moving parts - saves CPU power not using
var animate = function () {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update();
    render();
    stats.update();
};
function render() {
    //stats.begin();
    renderer.render(scene, camera);
    //stats.end();
}
animate();
