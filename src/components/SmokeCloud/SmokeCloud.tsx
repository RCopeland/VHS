/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// position functions
function getRandomIntInclusive(min: number, max: number) {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  return Math.floor(Math.random() * (mx - mn + 1) + mn); // The maximum is inclusive and the minimum is inclusive
}

function getXPos(groupNum: number) {
  return groupNum === 1
    ? getRandomIntInclusive(-8, -2)
    : getRandomIntInclusive(2, 8);
}

function getYPos() {
  return getRandomIntInclusive(-3, 5);
}

function getZPos(groupNum: number) {
  return groupNum === 1
    ? getRandomIntInclusive(-7, -5)
    : getRandomIntInclusive(0, 2);
}

const smokeParticles: any[] = [];

function SmokeCloud({ geometry: smokeGeometry, material: smokeMaterial }: any) {
  const { scene } = useThree();

  useFrame((state, delta) => {
    // eslint-disable-next-line no-param-reassign,no-return-assign
    smokeParticles.map((particle) => (particle.rotation.z += delta * 0.2));
  });

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 90; i++) {
      const smokeElement = new THREE.Mesh(smokeGeometry, smokeMaterial);
      smokeElement.scale.set(2, 2, 2);
      smokeElement.position.set(
        getXPos(getRandomIntInclusive(1, 2)), // left group or right group
        getYPos(), // get a value within height of effect
        getZPos(getRandomIntInclusive(1, 2)) // in front or behind box (avoiding the band where the box is)
      );
      smokeElement.rotation.z = Math.random() * 360;
      scene.add(smokeElement);
      smokeParticles.push(smokeElement);
      console.log("run");
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}

export default SmokeCloud;
