import * as THREE from 'three';

const vshader = `
    varying vec2 vUv;
    void main(){
    vUv = uv;
	vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
	gl_Position = projectionMatrix * modelViewPosition;
}`;

const fshader  = `
uniform vec2 u_resolution;
varying vec2 vUv;



void main(){
  vec4 c1 = vec4(23./255.,23./255.,23./255.,23./255.);
  vec4 c2 = vec4(238./255.,160./255.,1.,0.5);

  float f = sin(vUv.y*48.*3.1416);
  vec4 c = vec4(0.,0.,0.,0.); 
  if(f>0.){
    c = c1;
  }else{
    c = c2;
  }
  gl_FragColor = c;
}`

const mymesh = (x,y)=>{
    const uniforms = {
      u_resolution: { value: { x,y } }
  }
    const cylinder = new THREE.CylinderGeometry(2, 2, 100, 3);
    const material = new THREE.ShaderMaterial({
        uniforms,
        fragmentShader:fshader,
        vertexShader:vshader,
        side:THREE.DoubleSide
        })
    //const material = new THREE.MeshBasicMaterial({color:0xff0000})
    const mymesh = new THREE.Mesh(cylinder,material);
    mymesh.rotation.x+= Math.PI/2;
    mymesh.name="tunnel";
    return mymesh;
}

export default mymesh;