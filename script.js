// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 3D Three.js Scene Setup
let scene, camera, renderer, particles;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Create Constellation
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 1500; i++) {
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
    
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 1000;
}

function animateThree() {
    requestAnimationFrame(animateThree);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;
    renderer.render(scene, camera);
}

// GSAP Scroll Animations
function initGSAP() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                onEnter: () => el.classList.add('active')
            }
        });
    });

    // Hero Text Animation
    gsap.from(".hero-title", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out" });
    gsap.from(".summary", { duration: 1.2, delay: 0.5, opacity: 0, y: 20 });
}

// Initialize
initThree();
animateThree();
initGSAP();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
