import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
1,
1000
);

camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("bg").appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const vertices=[];

for(let i=0;i<4000;i++){

vertices.push(

( Math.random()-0.5 )*40,

( Math.random()-0.5 )*40,

( Math.random()-0.5 )*40

);

}

geometry.setAttribute(

'position',

new THREE.Float32BufferAttribute(vertices,3)

);

const material = new THREE.PointsMaterial({

size:0.03,

color:0x3b82f6

});

const stars = new THREE.Points(geometry,material);

scene.add(stars);

function animate(){

requestAnimationFrame(animate);

stars.rotation.y+=0.0008;

stars.rotation.x+=0.0003;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});

const model=document.querySelector("model-viewer");

const btn=document.getElementById("rotateBtn");

let rotate=true;

btn.onclick=()=>{

rotate=!rotate;

model.autoRotate=rotate;

btn.innerHTML=rotate ? "Pause Rotation" : "Resume Rotation";

}