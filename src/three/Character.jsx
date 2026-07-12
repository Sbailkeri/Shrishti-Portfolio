
import React, {useRef,useEffect,forwardRef,useImperativeHandle,} from "react";
import * as THREE from "three";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import HolographicScreen from "./HolographicScreen";
import CharacterFX from "./CharacterFX";
import { useScene } from "./SceneContext";
const Character = forwardRef((props, ref) => {
  const group = useRef();

  

  const { nodes, materials, animations } = useGLTF("/models/character.glb");

  const walkAnimation = useFBX("/animations/Walk.fbx");
  const waveAnimation = useFBX("/animations/Wave.fbx");
  const poseAnimation = useFBX("/animations/Pose.fbx");
  const jumpAnimation = useFBX("/animations/Jumping.fbx");
  const pointAnimation = useFBX("/animations/Pointing.fbx");
  const typingAnimation = useFBX("/animations/Typing.fbx");
  const meetingAnimation = useFBX("/animations/Meeting.fbx");
  const phoneAnimation = useFBX("/animations/Phone.fbx");
  const talkingAnimation = useFBX("/animations/Talking.fbx");
  const talking1Animation = useFBX("/animations/Talking1.fbx");
  const talking2Animation = useFBX("/animations/Talking2.fbx");
  

  animations[0].name = "Idle";
  walkAnimation.animations[0].name = "Walk";
  waveAnimation.animations[0].name = "Wave";
  poseAnimation.animations[0].name = "Pose";
  jumpAnimation.animations[0].name = "Jump";
  pointAnimation.animations[0].name = "Point";
  typingAnimation.animations[0].name = "Typing"; 
  meetingAnimation.animations[0].name = "Meeting";
  phoneAnimation.animations[0].name = "Phone";
  talkingAnimation.animations[0].name = "Talking";
  talking1Animation.animations[0].name = "Talking1";
  talking2Animation.animations[0].name = "Talking2";
  

  const { actions } = useAnimations(
    [
      
      walkAnimation.animations[0],
      waveAnimation.animations[0],
      poseAnimation.animations[0],
      jumpAnimation.animations[0],
      pointAnimation.animations[0],
      typingAnimation.animations[0],
      meetingAnimation.animations[0],
      phoneAnimation.animations[0],
      talkingAnimation.animations[0],
      talking1Animation.animations[0],
      talking2Animation.animations[0],
    ],
    group
  );
  ;

  

const currentAction = useRef(null);

const playAnimation = (
    name,
    {
        fade = 0.3,
        loop = true,
        clamp = false,
    } = {}
) => {

    const next = actions[name];
    console.log("Animation:", name);
console.log(next);

    if (!next) {
        console.warn("Animation not found:", name);
        return;
    }

    // Fade previous animation
    if (currentAction.current && currentAction.current !== next) {
        currentAction.current.fadeOut(fade);
    }

    next.reset();

    next.enabled = true;

    next.clampWhenFinished = clamp;

    next.setEffectiveWeight(1);

    next.setEffectiveTimeScale(1);

    if (loop) {

        next.setLoop(THREE.LoopRepeat, Infinity);

    } else {

        next.setLoop(THREE.LoopOnce, 1);

    }

    next.fadeIn(fade);

    next.play();

    currentAction.current = next;

};



useImperativeHandle(ref, () => ({

    get group() {

        return group.current;

    },

    actions,

    playAnimation

}));


  return (
          <group
            ref={group}
            position={[-8, -2, 0]}
            rotation={[0, 0, -0.1]}
            
            dispose={null}
          >
      <group name="Scene">
       <group
          name="Armature"
          rotation={[0 , 0.5 , 0]}
          scale={0.01}
        >
          <skinnedMesh
            name="backhead"
            geometry={nodes.backhead.geometry}
            material={materials.IP_NYYD_F_HAIR_4_tp_shd}
            skeleton={nodes.backhead.skeleton}
          />

          <skinnedMesh
            name="buckle004"
            geometry={nodes.buckle004.geometry}
            material={materials['Metal.001']}
            skeleton={nodes.buckle004.skeleton}
          />

          <skinnedMesh
            name="buckle005"
            geometry={nodes.buckle005.geometry}
            material={materials['Metal.001']}
            skeleton={nodes.buckle005.skeleton}
          />

          <skinnedMesh
            name="Eyebrown"
            geometry={nodes.Eyebrown.geometry}
            material={materials.neweyes}
            skeleton={nodes.Eyebrown.skeleton}
          />

          <skinnedMesh
            name="Eyebrown001"
            geometry={nodes.Eyebrown001.geometry}
            material={materials.neweyes}
            skeleton={nodes.Eyebrown001.skeleton}
          />

          <skinnedMesh
            name="eyebrow"
            geometry={nodes.eyebrow.geometry}
            material={materials.Extract23}
            skeleton={nodes.eyebrow.skeleton}
          />

          <skinnedMesh
            name="eyelashesblender_eyelashesblender_0"
            geometry={nodes.eyelashesblender_eyelashesblender_0.geometry}
            material={materials.eyelashesblender}
            skeleton={nodes.eyelashesblender_eyelashesblender_0.skeleton}
          />

          <skinnedMesh
            name="hair"
            geometry={nodes.hair.geometry}
            material={materials['Brown Hair']}
            skeleton={nodes.hair.skeleton}
          />

          <skinnedMesh
            name="headretopo_headretopo_0"
            geometry={nodes.headretopo_headretopo_0.geometry}
            material={materials.skin}
            skeleton={nodes.headretopo_headretopo_0.skeleton}
          />

          <skinnedMesh
            name="lowerlash"
            geometry={nodes.lowerlash.geometry}
            material={materials.Extract27}
            skeleton={nodes.lowerlash.skeleton}
          />

          <skinnedMesh
            name="Metronome"
            geometry={nodes.Metronome.geometry}
            material={materials['Rough Plastic']}
            skeleton={nodes.Metronome.skeleton}
          />

          <skinnedMesh
            name="model"
            geometry={nodes.model.geometry}
            material={materials['skin.001']}
            skeleton={nodes.model.skeleton}
          />

          <skinnedMesh
            name="pant"
            geometry={nodes.pant.geometry}
            material={materials.newpants}
            skeleton={nodes.pant.skeleton}
          />

          <skinnedMesh
            name="Shoe_Left"
            geometry={nodes.Shoe_Left.geometry}
            material={materials['Shoe Left']}
            skeleton={nodes.Shoe_Left.skeleton}
          />

          <skinnedMesh
            name="Shoe_right"
            geometry={nodes.Shoe_right.geometry}
            material={materials['Shoe right']}
            skeleton={nodes.Shoe_right.skeleton}
          />

          <skinnedMesh
            name="Strap"
            geometry={nodes.Strap.geometry}
            material={materials.Rubber}
            skeleton={nodes.Strap.skeleton}
          />

          <skinnedMesh
            name="The_Watch"
            geometry={nodes.The_Watch.geometry}
            material={materials.watchsimple}
            skeleton={nodes.The_Watch.skeleton}
          />

          <skinnedMesh
            name="The_Watch-Glass"
            geometry={nodes['The_Watch-Glass'].geometry}
            material={materials.watchglass}
            skeleton={nodes['The_Watch-Glass'].skeleton}
          />

          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Top.skeleton}
          />

          <skinnedMesh
            name="wrist"
            geometry={nodes.wrist.geometry}
            material={materials['Material.002']}
            skeleton={nodes.wrist.skeleton}
          />

          <skinnedMesh
            name="wrist1"
            geometry={nodes.wrist1.geometry}
            material={materials['Material.002']}
            skeleton={nodes.wrist1.skeleton}
          />

          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
      {/* <CharacterFX /> */}
    </group>
  );
});

export default Character;

useGLTF.preload("/models/character.glb");