import * as THREE from 'three';

const vshader = `
void main() {

    gl_Position =   projectionMatrix * 
                    modelViewMatrix * 
                    vec4(position,1.0);
}`

const fshader = `
    uniform sampler2D texture1;
    uniform vec2 uResolution; 
    void main() {
        vec2 pixel = gl_FragCoord.xy/uResolution;
        gl_FragColor = texture2D(texture1,pixel); // Displays Nothing
        //gl_FragColor = vec4(0.5, 0.2, 1.0, 1.0); // Works; Displays Flat Color

    }`


class Image{
    constructor(width,height){
        this.uniforms = {
            uResolution : {type: "vec2", value: new THREE.Vector2(width,height)},
            texture1: { type: "t", value: new THREE.TextureLoader().load("/static/perfilfoto.jpg",function(texture){texture.wrapS = texture.wrapT = THREE.RepeatWrapping;}) }
        };
        this.picturematerial = new THREE.ShaderMaterial({
            uniforms:this.uniforms,
            vertexShader:vshader,
            fragmentShader:fshader,
            side:THREE.DoubleSide
        });
        this.sphere = new  THREE.PlaneGeometry( 1, 1 );;
        this.mesh = new THREE.Mesh(this.sphere,this.picturematerial);
        this.mesh.position.z=48.2;
    }
    getMesh(){
        return this.mesh;
    }
    rezize(width,height){
        this.uniforms.uResolution.value = new THREE.Vector2(width,height);
    }
    animation(){
        const t = Date.now()/1000;
        this.mesh.position.y += Math.sin(t)*0.005;
        this.mesh.position.x += Math.cos(t)*0.005;
    }

}

export default Image;