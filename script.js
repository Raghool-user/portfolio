gsap.registerPlugin(ScrollTrigger);

// --- 3D Background with Three.js ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Single renderer initialization
const renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create Particle Geometry
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 2000; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ 
    color: 0x3b82f6, 
    size: 2, 
    transparent: true, 
    opacity: 0.6 
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 1000;

// Single Animation Loop
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0002;
    renderer.render(scene, camera);
}
animate();

// --- GSAP Reveal Animations ---
const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => {
    ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => el.classList.add('active'),
        once: true // Animation happens once per scroll
    });
});

// Window Resize Handler to maintain aspect ratio
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
