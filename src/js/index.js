import '../scss/common.scss'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const navbarBurger = document.getElementById('navbar-burger')
const navbarBurgerTarget = document.getElementById(navbarBurger.dataset.target)

navbarBurger.addEventListener('click', () => {
	navbarBurger.classList.toggle('is-active')
	navbarBurgerTarget.classList.toggle('is-active')
})

// --------------------------------- 3D Stuff ---------------------------------

// Create Scene
const scene = new THREE.Scene()

// Add Camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
let cameraRadius = 5
camera.position.z = cameraRadius

// Add Renderer
const canvas = document.querySelector('#canvas')
const renderer = new THREE.WebGLRenderer({
	powerPreference: 'low-power',
	canvas: canvas,
	alpha: true,
	antialias: true,
})
renderer.setPixelRatio(2)

// Set Window Size
const setWindowSize = () => {
	const height = 300
	canvas.style.height = height + 'px'
	renderer.setSize(window.innerWidth, height)
	camera.aspect = window.innerWidth / height
	camera.updateProjectionMatrix()
}
setWindowSize()
window.onresize = setWindowSize

// Add Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 2)
scene.add(ambientLight)

// Add Model Loader
const modelLoader = new GLTFLoader()

// Add Baritone Model
// NOTE: Use glTF VS Code extension to convert .gltf to .glb
let baritone
modelLoader.load(
	'../assets/3d/Violin.glb',
	(gltf) => {
		const scaleMultiplier = 2
		gltf.scene.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier)
		baritone = gltf.scene
		baritone.rotateX(-1)
		baritone.rotateZ(4)
		scene.add(baritone)
	},
	undefined,
	(error) => {
		console.error(error)
	}
)

const controls = new OrbitControls(camera, renderer.domElement)

// Animation Loop
function animate() {
	requestAnimationFrame(animate)
	controls.update()
	renderer.render(scene, camera)
}
animate()
