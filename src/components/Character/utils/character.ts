import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { decryptFile } from "./decrypt";

const baseUrl = import.meta.env.BASE_URL;

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(`${baseUrl}draco/`);
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = async (): Promise<GLTF | null> => {
    const encryptedBlob = await decryptFile(
      `${baseUrl}models/character.enc?v=2`,
      "MyCharacter12"
    );
    const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

    return new Promise((resolve, reject) => {
      loader.load(
        blobUrl,
        async (gltf) => {
          const character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);

          character.traverse((child: THREE.Object3D) => {
            if (child.name === "Plane004" || child.parent?.name === "Plane004") {
              child.visible = false;
            }

            if (child.name === "screenlight") {
              const screenLightMesh = child as THREE.Mesh;
              const material = screenLightMesh.material as
                | THREE.MeshStandardMaterial
                | undefined;

              if (material) {
                material.transparent = true;
                material.opacity = 0;
                material.emissive.set("#B0F5EA");
              }
            }
          });

          character.traverse((child: THREE.Object3D) => {
            const mesh = child as THREE.Mesh;

            if (!mesh.isMesh || !mesh.material) {
              return;
            }

            if (mesh.name === "BODY.SHIRT") {
              const newMaterial = (
                mesh.material as THREE.Material
              ).clone() as THREE.MeshStandardMaterial;
              newMaterial.color = new THREE.Color("#8B4513");
              mesh.material = newMaterial;
            } else if (mesh.name === "Pant") {
              const newMaterial = (
                mesh.material as THREE.Material
              ).clone() as THREE.MeshStandardMaterial;
              newMaterial.color = new THREE.Color("#000000");
              mesh.material = newMaterial;
            }

            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.frustumCulled = true;
          });

          character.getObjectByName("footR")!.position.y = 3.36;
          character.getObjectByName("footL")!.position.y = 3.36;
          dracoLoader.dispose();
          resolve(gltf);
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
