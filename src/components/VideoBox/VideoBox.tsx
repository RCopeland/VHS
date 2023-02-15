/* eslint-disable react/no-unknown-property */
import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Material, MeshBasicMaterial, Texture, TextureLoader } from "three";

function VideoBox(props: ThreeElements["mesh"] & { movieUrl: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    ref.current.rotation.y = 0.25;
  }, []);

  const { movieUrl } = props;

  // sides of the box
  const posterSide: Texture = useLoader(
    TextureLoader,
    `/src/assets/${movieUrl}`
  );
  const cubeMaterialArray: Material[] = [
    new MeshBasicMaterial({ color: "black" }),
    new MeshBasicMaterial({ color: "black" }),
    new MeshBasicMaterial({ color: "black" }),
    new MeshBasicMaterial({ color: "black" }),
    new MeshBasicMaterial({ map: posterSide }),
    new MeshBasicMaterial({ color: "black" }),
  ];

  let direction = "cw";
  useFrame(() => {
    if (ref.current.rotation.y <= 0) {
      direction = "cw";
    }

    if (ref.current.rotation.y >= 1) {
      direction = "ccw";
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    direction === "cw"
      ? (ref.current.rotation.y += 0.00125)
      : (ref.current.rotation.y -= 0.00125);
    console.log(direction, ref.current.rotation.y);
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <mesh {...props} ref={ref} scale={1} material={cubeMaterialArray}>
      <boxGeometry args={[4, 7.48, 1.5]} />
    </mesh>
  );
}

export default VideoBox;
