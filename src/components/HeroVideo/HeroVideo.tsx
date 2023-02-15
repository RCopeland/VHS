/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { Stats, OrbitControls } from "@react-three/drei";
import VideoBox from "../VideoBox/VideoBox";
import SmokeCloud from "../SmokeCloud/SmokeCloud";

function HeroVideo({ movieUrl }: { movieUrl: string }) {
  const smokeUrl =
    "https://raw.githubusercontent.com/RCopeland/files/main/clouds.png";

  const helpers = {
    grid: false,
    controls: false,
    stats: false,
  };

  const smokeTexture = useLoader(TextureLoader, smokeUrl);

  // surrounding particles
  const smokeGeometry = new THREE.PlaneGeometry(2, 2);
  const smokeMaterial = new THREE.MeshBasicMaterial({
    map: smokeTexture,
    opacity: 0.7,
    transparent: true,
  });

  return (
    <div className="absolute top-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <>
            <VideoBox position={[-3, 1.5, 0]} movieUrl={movieUrl} />
            <SmokeCloud geometry={smokeGeometry} material={smokeMaterial} />
          </>
        </Suspense>
        {helpers.controls && <OrbitControls />}
        {helpers.stats && <Stats />}
        {helpers.grid && <gridHelper args={[20, 20]} />}
      </Canvas>
    </div>
  );
}

export default HeroVideo;
