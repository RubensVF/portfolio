import * as THREE from 'three';
import Image from './Image';
import { addInstagram, addGithub, addLinkedin } from './Logos/logo';
import mymesh from './tunnel/tunnel';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
class World3D{
    constructor(canvas){
        this.canvas = canvas;
        const width = canvas?.clientWidth;
        const height = canvas?.clientHeight;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x171717);
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 50;
        this.renderer = new THREE.WebGL1Renderer({ canvas: this.canvas });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();

        //this.controls = new OrbitControls(this.camera,this.canvas)
        this.image = new Image(width,height);
        this.scene.add(this.image.getMesh());
        const newmesh = mymesh(width,height);
        this.scene.add(newmesh);
        addInstagram(this.scene);
        addGithub(this.scene);
        addLinkedin(this.scene);
        this.render();
    }
    render(){
        requestAnimationFrame(()=>{
            this.image.animation();    
            const instagram = this.scene.getObjectByName("instagram");
            const github = this.scene.getObjectByName("github");
            const linkedin = this.scene.getObjectByName("linkedin")
            if(instagram && github &&linkedin){
                instagram.children[0].rotation.y+=.01;
                this.scene.getObjectByName("instagram-container").material.uniforms.uTime.value+=0.01;
                github.children[0].rotation.y+=.01;
                this.scene.getObjectByName("github-container").material.uniforms.uTime.value+=0.01;
                linkedin.children[0].rotation.y+=.01;
                this.scene.getObjectByName("linkedin-container").material.uniforms.uTime.value+=0.01;
            }
            
           // this.controls.update();         
            this.renderer.render(this.scene, this.camera);
            this.render();
        });
    }
    scroll(z,maxHeight){
        const max = maxHeight;
        const smooth = 0.09;
        const t = smooth*50*(z/max);
        this.camera.position.z=50+t;
        const insta = this.scene.getObjectByName("instagram");
        const github = this.scene.getObjectByName("github");
        const linkedin = this.scene.getObjectByName("linkedin");
            if(insta && github && linkedin){
                if(1000<-z){
                insta.visible=true;
                github.visible=true;
                linkedin.visible=true;
            }
                else{
                    insta.visible=false;
                    github.visible=false;
                    linkedin.visible=false;
                }
                insta.position.z=48+t;
                github.position.z=48+t;
                linkedin.position.z=48+t;
            }
    }
    resize(){
        this.camera.aspect = this.canvas?.clientWidth / this.canvas?.clientHeight;
        this.image.rezize(this.canvas?.clientWidth , this.canvas?.clientHeight)
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas?.clientWidth , this.canvas?.clientHeight);
    }
    mouseMove(x,y){
            this.mouse.set(x,y);
            //console.log(this.mouse.x,this.mouse.y);
            this.raycaster.setFromCamera( this.mouse, this.camera );
            const intersects = this.raycaster.intersectObjects( this.scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {
        if(intersects[ i ].object.name==='instagram-container'){
            window.location.href = "https://www.instagram.com/rubenspensky/";
        }
        else if(intersects[ i ].object.name==='github-container'){
            window.location.href = "https://github.com/RubensVF";
        }
        else if(intersects[ i ].object.name==='linkedin-container'){
            window.location.href = "https://www.linkedin.com/in/rub%C3%A9n-vel%C3%A1zquez-flores-a7ab7522a/";
        }
	}
    }
}

export default World3D;