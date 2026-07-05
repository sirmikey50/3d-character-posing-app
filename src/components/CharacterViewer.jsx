import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function CharacterViewer({ pose }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create character (simple humanoid)
    const character = createCharacter();
    scene.add(character);
    characterRef.current = character;

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x2d3561 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    scene.add(ground);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle rotation
      if (characterRef.current) {
        characterRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update pose
  useEffect(() => {
    if (pose && characterRef.current) {
      updateCharacterPose(characterRef.current, pose.description);
    }
  }, [pose]);

  return (
    <div className="character-viewer" ref={containerRef} />
  );
}

function createCharacter() {
  const group = new THREE.Group();

  // Head
  const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xfdbcb4 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.7;
  head.castShadow = true;
  group.add(head);

  // Body
  const bodyGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.2);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 1;
  body.castShadow = true;
  group.add(body);

  // Left Arm
  const leftArmGeometry = new THREE.BoxGeometry(0.15, 0.8, 0.15);
  const armMaterial = new THREE.MeshStandardMaterial({ color: 0xfdbcb4 });
  const leftArm = new THREE.Mesh(leftArmGeometry, armMaterial);
  leftArm.position.set(-0.35, 1.2, 0);
  leftArm.castShadow = true;
  group.add(leftArm);

  // Right Arm
  const rightArm = new THREE.Mesh(leftArmGeometry, armMaterial);
  rightArm.position.set(0.35, 1.2, 0);
  rightArm.castShadow = true;
  group.add(rightArm);

  // Left Leg
  const legGeometry = new THREE.BoxGeometry(0.15, 0.8, 0.15);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a2a });
  const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
  leftLeg.position.set(-0.15, 0.2, 0);
  leftLeg.castShadow = true;
  group.add(leftLeg);

  // Right Leg
  const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
  rightLeg.position.set(0.15, 0.2, 0);
  rightLeg.castShadow = true;
  group.add(rightLeg);

  group.castShadow = true;
  return group;
}

function updateCharacterPose(character, description) {
  const desc = description.toLowerCase();
  
  // Get limbs
  const body = character.children[1]; // Body
  const leftArm = character.children[2]; // Left Arm
  const rightArm = character.children[3]; // Right Arm
  const leftLeg = character.children[4]; // Left Leg
  const rightLeg = character.children[5]; // Right Leg

  // Reset rotations
  [body, leftArm, rightArm, leftLeg, rightLeg].forEach(limb => {
    limb.rotation.set(0, 0, 0);
  });

  // Parse pose description and apply rotations
  if (desc.includes('sedí') || desc.includes('sezení')) {
    leftLeg.rotation.x = Math.PI / 3;
    rightLeg.rotation.x = Math.PI / 3;
    body.position.y -= 0.3;
  }

  if (desc.includes('ruce nahoru') || desc.includes('vzhůru')) {
    leftArm.rotation.x = -Math.PI / 2;
    rightArm.rotation.x = -Math.PI / 2;
  }

  if (desc.includes('běh')) {
    leftArm.rotation.x = Math.PI / 3;
    rightArm.rotation.x = -Math.PI / 3;
    leftLeg.rotation.x = -Math.PI / 4;
    rightLeg.rotation.x = Math.PI / 4;
  }

  if (desc.includes('tleskání')) {
    leftArm.rotation.z = Math.PI / 2;
    rightArm.rotation.z = -Math.PI / 2;
  }
}

export default CharacterViewer;
