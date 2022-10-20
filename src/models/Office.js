import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Office(props) {
  const { nodes, materials } = useGLTF("scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 1.14]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, -0.01, 0]} />
            <group position={[-0.59, 0.57, 3.31]}>
              <group position={[-1.14, 0, 0]}>
                <mesh
                  geometry={nodes.Object_19.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group position={[-1.7, 0, 0.15]}>
                <mesh
                  geometry={nodes.Object_21.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["Material.002"]}
              />
            </group>
            <group position={[0.28, 0.5, 3.26]}>
              <group position={[0, 0.77, 0.01]}>
                <mesh
                  geometry={nodes.Object_28.geometry}
                  material={materials.Water_bottle}
                />
              </group>
              <mesh
                geometry={nodes.Object_23.geometry}
                material={materials.Monitor_01}
              />
              <mesh
                geometry={nodes.Object_24.geometry}
                material={materials.printer_Button_ONOFF}
              />
              <mesh
                geometry={nodes.Object_25.geometry}
                material={materials.BOOKS_3}
              />
              <mesh
                geometry={nodes.Object_26.geometry}
                material={materials.Monitor_01_Decals}
              />
            </group>
            <group position={[-0.73, 0.6, 3.47]}>
              <group position={[0.15, 0.06, 0.07]}>
                <mesh
                  geometry={nodes.Object_34.geometry}
                  material={materials.printer_Button_ONOFF}
                />
              </group>
              <group position={[0.14, 0.06, 0.07]}>
                <mesh
                  geometry={nodes.Object_36.geometry}
                  material={materials.printer_Buttons_Black}
                />
              </group>
              <group position={[0.13, 0.06, 0.07]}>
                <mesh
                  geometry={nodes.Object_38.geometry}
                  material={materials.printer_Buttons_Black}
                />
              </group>
              <group position={[0.12, 0.06, 0.07]}>
                <mesh
                  geometry={nodes.Object_40.geometry}
                  material={materials.printer_Buttons_Black}
                />
              </group>
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.printer_Grey}
              />
              <mesh
                geometry={nodes.Object_31.geometry}
                material={materials.printer_Buttons_Black}
              />
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials.printer_White}
              />
            </group>
            <group position={[-2.74, -0.02, 0.02]}>
              <group position={[0.36, 0.9, -0.02]}>
                <group position={[-0.66, 0, 0.01]}>
                  <mesh
                    geometry={nodes.Object_58.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <group position={[-0.66, 0, 0.01]}>
                  <mesh
                    geometry={nodes.Object_60.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_55.geometry}
                  material={materials["wood.002"]}
                />
                <mesh
                  geometry={nodes.Object_56.geometry}
                  material={materials.wood}
                />
              </group>
              <mesh
                geometry={nodes.Object_53.geometry}
                material={materials.wood_4}
              />
            </group>
            <group position={[-4.81, -0.02, 1.56]}>
              <group position={[0, 0.32, 0]}>
                <group position={[0.97, 0, 0.46]}>
                  <group position={[-0.47, 0.28, 0.01]}>
                    <mesh
                      geometry={nodes.Object_78.geometry}
                      material={materials.Metal}
                    />
                  </group>
                </group>
                <mesh
                  geometry={nodes.Object_74.geometry}
                  material={materials.wood_4}
                />
              </group>
              <group position={[0.97, 0, 0.46]}>
                <group position={[-0.47, 0.28, 0.01]}>
                  <mesh
                    geometry={nodes.Object_99.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_97.geometry}
                  material={materials.wood_4}
                />
              </group>
              <group position={[0, 0.31, 0]}>
                <mesh
                  geometry={nodes.Object_101.geometry}
                  material={materials.wood_4}
                />
              </group>
              <mesh
                geometry={nodes.Object_72.geometry}
                material={materials.wood_4}
              />
            </group>
            <group position={[-0.48, -0.02, 3.33]}>
              <group position={[0, 0.19, 0]}>
                <group position={[0.46, 0, 0.3]}>
                  <group position={[-0.22, 0.17, 0.01]}>
                    <mesh
                      geometry={nodes.Object_109_1.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_107.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_105.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 0.37, 0]}>
                <group position={[0.46, 0, 0.3]}>
                  <group position={[-0.22, 0.17, 0.01]}>
                    <mesh
                      geometry={nodes.Object_115.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_113.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_111.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0.46, 0, 0.3]}>
                <group position={[-0.22, 0.17, 0.01]}>
                  <mesh
                    geometry={nodes.Object_119.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_117.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <mesh
                geometry={nodes.Object_103.geometry}
                material={materials.Grey_shelfes}
              />
            </group>
            <group position={[-2.27, -0.02, 3.33]}>
              <group position={[0, 0.26, 0]}>
                <group position={[0.94, 0, 0.25]}>
                  <group position={[-0.46, 0.23, 0.01]}>
                    <mesh
                      geometry={nodes.Object_127.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_125.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_123.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0.94, 0, 0.25]}>
                <group position={[-0.46, 0.23, 0.01]}>
                  <mesh
                    geometry={nodes.Object_131.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_129.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 0.25, 0]}>
                <mesh
                  geometry={nodes.Object_133.geometry}
                  material={materials.wood_4}
                />
              </group>
              <mesh
                geometry={nodes.Object_121.geometry}
                material={materials.Grey_shelfes}
              />
            </group>
            <group position={[-0.96, -0.02, 3.33]}>
              <group position={[0, 0.19, 0]}>
                <group position={[0.46, 0, 0.3]}>
                  <group position={[-0.22, 0.17, 0.01]}>
                    <mesh
                      geometry={nodes.Object_141.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_139.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_137.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 0.37, 0]}>
                <group position={[0.46, 0, 0.3]}>
                  <group position={[-0.22, 0.17, 0.01]}>
                    <mesh
                      geometry={nodes.Object_147.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_145.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_143.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0.46, 0, 0.3]}>
                <group position={[-0.22, 0.17, 0.01]}>
                  <mesh
                    geometry={nodes.Object_151.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_149.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <mesh
                geometry={nodes.Object_135.geometry}
                material={materials.Grey_shelfes}
              />
            </group>
            <group position={[-1.11, -0.02, 0]}>
              <group position={[0, 0.37, 0]}>
                <group position={[1.07, 0, 0.35]}>
                  <group position={[-0.53, 0.34, 0.01]}>
                    <mesh
                      geometry={nodes.Object_255.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_253.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_251.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 0.74, 0]}>
                <group position={[1.07, 0, 0.35]}>
                  <group position={[-0.53, 0.34, 0.01]}>
                    <mesh
                      geometry={nodes.Object_261.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_259.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_257.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 1.1, 0]}>
                <group position={[0.59, 0.39, 0.08]}>
                  <mesh
                    geometry={nodes.Object_265.geometry}
                    material={materials.Black_plastic}
                  />
                </group>
                <group position={[0.59, 0.45, 0.08]}>
                  <mesh
                    geometry={nodes.Object_267.geometry}
                    material={materials.Black_plastic}
                  />
                </group>
                <group position={[0.59, 0.51, 0.08]}>
                  <mesh
                    geometry={nodes.Object_269.geometry}
                    material={materials.Black_plastic}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_263.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[1.07, 0, 0.35]}>
                <group position={[-0.53, 0.34, 0.01]}>
                  <mesh
                    geometry={nodes.Object_273.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_271.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[1.07, 1.1, 0.35]}>
                <mesh
                  geometry={nodes.Object_275.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0.55, 1.44, 0.37]}>
                <mesh
                  geometry={nodes.Object_277.geometry}
                  material={materials.Handle_material}
                />
              </group>
              <mesh
                geometry={nodes.Object_249.geometry}
                material={materials.Grey_shelfes}
              />
            </group>
            <group position={[-2.23, -0.02, 0]}>
              <group position={[0, 0.37, 0]}>
                <group position={[1.07, 0, 0.35]}>
                  <group position={[-0.53, 0.34, 0.01]}>
                    <mesh
                      geometry={nodes.Object_285.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_283.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_281.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 0.74, 0]}>
                <group position={[1.07, 0, 0.35]}>
                  <group position={[-0.53, 0.34, 0.01]}>
                    <mesh
                      geometry={nodes.Object_291.geometry}
                      material={materials.Handle_material}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_289.geometry}
                    material={materials.Grey_shelfes}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_287.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0, 1.1, 0]}>
                <group position={[0.59, 0.37, -0.02]}>
                  <mesh
                    geometry={nodes.Object_295.geometry}
                    material={materials.Monitor_01_Decals}
                  />
                  <mesh
                    geometry={nodes.Object_296.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <group position={[0.59, 0.42, 0.04]}>
                  <mesh
                    geometry={nodes.Object_298.geometry}
                    material={materials.BOOKS_2}
                  />
                  <mesh
                    geometry={nodes.Object_299.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <group position={[0.94, 0.39, 0.08]}>
                  <mesh
                    geometry={nodes.Object_301.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <group position={[0.72, 0.39, 0.08]}>
                  <mesh
                    geometry={nodes.Object_303.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <group position={[0.86, 0.45, 0.08]}>
                  <mesh
                    geometry={nodes.Object_305.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_293.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[1.07, 0, 0.35]}>
                <group position={[-0.53, 0.34, 0.01]}>
                  <mesh
                    geometry={nodes.Object_309.geometry}
                    material={materials.Handle_material}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_307.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[1.07, 1.1, 0.35]}>
                <mesh
                  geometry={nodes.Object_311.geometry}
                  material={materials.Grey_shelfes}
                />
              </group>
              <group position={[0.55, 1.44, 0.37]}>
                <mesh
                  geometry={nodes.Object_313.geometry}
                  material={materials.Handle_material}
                />
              </group>
              <mesh
                geometry={nodes.Object_279.geometry}
                material={materials.Grey_shelfes}
              />
            </group>
            <group position={[-1.99, 0.55, 3.48]}>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_317.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_319.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_321.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_323.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_325.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_327.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_329.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_331.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_333.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_335.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <mesh
                geometry={nodes.Object_315.geometry}
                material={materials.Monitor_01}
              />
            </group>
            <group position={[-1.99, 0.62, 3.48]}>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_364.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_366.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_368.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_370.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_372.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_374.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_376.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_378.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_380.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_382.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <mesh
                geometry={nodes.Object_362.geometry}
                material={materials.Monitor_01}
              />
            </group>
            <group position={[-4.34, 1.56, 0.01]}>
              <group position={[-0.02, 0.07, 0.02]}>
                <mesh
                  geometry={nodes.Object_405.geometry}
                  material={materials.printer_Buttons_Black}
                />
              </group>
              <group position={[0.04, -0.04, 0.02]}>
                <mesh
                  geometry={nodes.Object_407.geometry}
                  material={materials.printer_Buttons_Black}
                />
              </group>
              <mesh
                geometry={nodes.Object_401.geometry}
                material={materials.Monitor_01_Decals}
              />
              <mesh
                geometry={nodes.Object_402.geometry}
                material={materials.printer_Buttons_Black}
              />
              <mesh
                geometry={nodes.Object_403.geometry}
                material={materials.Monitor_01}
              />
            </group>
            <group position={[-4.58, 0.41, 0.79]}>
              <group position={[-0.09, -0.09, 0.51]}>
                <group position={[-0.33, 0.09, 0.03]}>
                  <mesh
                    geometry={nodes.Object_583.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_581.geometry}
                  material={materials.wood}
                />
              </group>
              <group position={[-0.36, 0.29, -0.01]}>
                <group position={[0.02, 0.01, 0.01]}>
                  <mesh
                    geometry={nodes.Object_588.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_585.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_586.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[-0.03, 0.28, 0.15]}>
                <mesh
                  geometry={nodes.Object_590.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_591.geometry}
                  material={materials.printer_Buttons_Black}
                />
                <mesh
                  geometry={nodes.Object_592.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[-0.2, 0.29, -0.29]}>
                <mesh
                  geometry={nodes.Object_594.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_595.geometry}
                  material={materials.Black_plastic}
                />
              </group>
              <group position={[-0.03, 0.54, -0.07]}>
                <mesh
                  geometry={nodes.Object_597.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_598.geometry}
                  material={materials.Monitor_01_Decals}
                />
                <mesh
                  geometry={nodes.Object_599.geometry}
                  material={materials.Monitor_screen}
                />
                <mesh
                  geometry={nodes.Object_600.geometry}
                  material={materials["Monitor.002"]}
                />
              </group>
              <group position={[-0.44, -0.11, -0.33]}>
                <mesh
                  geometry={nodes.Object_602.geometry}
                  material={materials.OfficeChair_Modern}
                />
                <mesh
                  geometry={nodes.Object_604.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_605.geometry}
                  material={materials.Pam_desk}
                />
                <mesh
                  geometry={nodes.Object_603.geometry}
                  material={materials.Metal}
                />
              </group>
              <mesh
                geometry={nodes.Object_579.geometry}
                material={materials.wood}
              />
            </group>
            <group position={[-4.08, 0.41, 0.79]}>
              <group position={[0.09, -0.09, -0.51]}>
                <group position={[0.33, 0.09, -0.03]}>
                  <mesh
                    geometry={nodes.Object_611.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_609.geometry}
                  material={materials.wood}
                />
              </group>
              <group position={[0.2, 0.29, 0]}>
                <group position={[-0.02, 0.01, 0.01]}>
                  <mesh
                    geometry={nodes.Object_616.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_613.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_614.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[-0.01, 0.28, -0.08]}>
                <mesh
                  geometry={nodes.Object_618.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_619.geometry}
                  material={materials.printer_Buttons_Black}
                />
                <mesh
                  geometry={nodes.Object_620.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0.2, 0.29, 0.29]}>
                <mesh
                  geometry={nodes.Object_622.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_623.geometry}
                  material={materials.Black_plastic}
                />
              </group>
              <group position={[0.03, 0.54, 0.37]}>
                <mesh
                  geometry={nodes.Object_625.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_626.geometry}
                  material={materials.Monitor_01_Decals}
                />
                <mesh
                  geometry={nodes.Object_627.geometry}
                  material={materials.Monitor_screen}
                />
                <mesh
                  geometry={nodes.Object_628.geometry}
                  material={materials["Monitor.002"]}
                />
              </group>
              <group position={[0.44, -0.11, 0.05]}>
                <mesh
                  geometry={nodes.Object_630.geometry}
                  material={materials.OfficeChair_Modern}
                />
                <mesh
                  geometry={nodes.Object_632.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_633.geometry}
                  material={materials.Pam_desk}
                />
                <mesh
                  geometry={nodes.Object_631.geometry}
                  material={materials.Metal}
                />
              </group>
              <mesh
                geometry={nodes.Object_607.geometry}
                material={materials.wood}
              />
            </group>
            <group position={[-1.86, 0.41, 1.7]}>
              <group position={[-0.09, -0.09, 0.51]}>
                <group position={[-0.33, 0.09, 0.03]}>
                  <mesh
                    geometry={nodes.Object_639.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_637.geometry}
                  material={materials.wood}
                />
              </group>
              <group position={[-0.2, 0.29, 0]}>
                <group position={[0.03, 0.01, 0]}>
                  <mesh
                    geometry={nodes.Object_644.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_641.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_642.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[-0.2, 0.29, -0.29]}>
                <mesh
                  geometry={nodes.Object_650.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_651.geometry}
                  material={materials.Black_plastic}
                />
              </group>
              <group position={[0.04, 0.54, -0.26]}>
                <mesh
                  geometry={nodes.Object_653.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_654.geometry}
                  material={materials.Monitor_01_Decals}
                />
                <mesh
                  geometry={nodes.Object_655.geometry}
                  material={materials.Monitor_screen}
                />
                <mesh
                  geometry={nodes.Object_656.geometry}
                  material={materials["Monitor.002"]}
                />
              </group>
              <group position={[-0.44, -0.11, -0.33]}>
                <mesh
                  geometry={nodes.Object_658.geometry}
                  material={materials.OfficeChair_Modern}
                />
                <mesh
                  geometry={nodes.Object_660.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_661.geometry}
                  material={materials.Pam_desk}
                />
                <mesh
                  geometry={nodes.Object_659.geometry}
                  material={materials.Metal}
                />
              </group>
              <mesh
                geometry={nodes.Object_635.geometry}
                material={materials.wood}
              />
            </group>
            <group position={[-0.83, 0.41, 1.45]}>
              <group position={[-0.51, -0.09, -0.09]}>
                <group position={[-0.03, 0.09, -0.33]}>
                  <mesh
                    geometry={nodes.Object_667.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_665.geometry}
                  material={materials.wood}
                />
              </group>
              <group position={[-0.02, 0.29, -0.21]}>
                <group position={[0.01, 0.01, 0.02]}>
                  <mesh
                    geometry={nodes.Object_672.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_669.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_670.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[0.26, 0.54, 0.04]}>
                <mesh
                  geometry={nodes.Object_681.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_682.geometry}
                  material={materials.Monitor_01_Decals}
                />
                <mesh
                  geometry={nodes.Object_683.geometry}
                  material={materials.Monitor_screen}
                />
                <mesh
                  geometry={nodes.Object_684.geometry}
                  material={materials["Monitor.002"]}
                />
              </group>
              <group position={[0.07, -0.11, -0.61]}>
                <mesh
                  geometry={nodes.Object_686.geometry}
                  material={materials.OfficeChair_Modern}
                />
                <mesh
                  geometry={nodes.Object_688.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_689.geometry}
                  material={materials.Pam_desk}
                />
                <mesh
                  geometry={nodes.Object_687.geometry}
                  material={materials.Metal}
                />
              </group>
              <mesh
                geometry={nodes.Object_663.geometry}
                material={materials.wood}
              />
            </group>
            <group position={[-0.83, 0.41, 1.95]}>
              <group position={[0.51, -0.09, 0.09]}>
                <group position={[0.03, 0.09, 0.33]}>
                  <mesh
                    geometry={nodes.Object_695.geometry}
                    material={materials.Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_693.geometry}
                  material={materials.wood}
                />
              </group>
              <group position={[0, 0.29, 0.2]}>
                <group position={[0, 0.01, -0.03]}>
                  <mesh
                    geometry={nodes.Object_700.geometry}
                    material={materials.Monitor_01}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_697.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_698.geometry}
                  material={materials.Monitor_01}
                />
              </group>
              <group position={[-0.26, 0.54, -0.04]}>
                <mesh
                  geometry={nodes.Object_709.geometry}
                  material={materials.Monitor_01}
                />
                <mesh
                  geometry={nodes.Object_710.geometry}
                  material={materials.Monitor_01_Decals}
                />
                <mesh
                  geometry={nodes.Object_711.geometry}
                  material={materials.Monitor_screen}
                />
                <mesh
                  geometry={nodes.Object_712.geometry}
                  material={materials["Monitor.002"]}
                />
              </group>
              <group position={[-0.33, -0.11, 0.44]}>
                <mesh
                  geometry={nodes.Object_714.geometry}
                  material={materials.OfficeChair_Modern}
                />
                <mesh
                  geometry={nodes.Object_716.geometry}
                  material={materials.Black_plastic}
                />
                <mesh
                  geometry={nodes.Object_717.geometry}
                  material={materials.Pam_desk}
                />
                <mesh
                  geometry={nodes.Object_715.geometry}
                  material={materials.Metal}
                />
              </group>
              <mesh
                geometry={nodes.Object_691.geometry}
                material={materials.wood}
              />
            </group>
            <group position={[-1.9, 0.75, 2.25]}>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_737.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_739.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_741.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_743.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_745.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_747.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_749.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_751.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_753.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <group position={[0, -0.04, 0]}>
                <mesh
                  geometry={nodes.Object_755.geometry}
                  material={materials.Monitor_01_Decals}
                />
              </group>
              <mesh
                geometry={nodes.Object_735.geometry}
                material={materials.Monitor_01_Decals}
              />
            </group>
            <group position={[-2.15, 0.75, 2.01]}>
              <mesh
                geometry={nodes.Object_781.geometry}
                material={materials.Pam_desk}
              />
              <mesh
                geometry={nodes.Object_782.geometry}
                material={materials.Coffee}
              />
            </group>
            <group position={[-3.68, 0.11, 1.79]}>
              <mesh
                geometry={nodes.Object_784.geometry}
                material={materials.Black_plastic}
              />
            </group>
            <group position={[-0.05, 0.11, 0.18]}>
              <mesh
                geometry={nodes.Object_943.geometry}
                material={materials.Black_plastic}
                position={[0.18, 0, 0]}
              />
            </group>
          </group>
          <mesh
            geometry={nodes.Box.geometry}
            material={nodes.Box.material}
            position={[-2.56, 0.19, 0.77]}
            rotation={[1.57, 0, 0]}
            scale={[1.43, 2.2, 1]}
          />
          <mesh
            geometry={nodes.Box_1.geometry}
            material={nodes.Box_1.material}
            position={[-6, -2.06, 0.77]}
            rotation={[-2.56, -1.57, 2.15]}
            scale={[0.95, 2.2, 1]}
          />
          <mesh
            geometry={nodes.Box_2.geometry}
            material={nodes.Box_2.material}
            position={[-2.56, -2.04, -0.18]}
            scale={[1.43, 4.74, 1]}
          />
        </group>
      </group>
      <group position={[-0.96, 1.86, 2.27]} scale={[0.1, 0.1, 0.12]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.Chassis}
          />
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.Big_Buttons}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Small_Buttons}
          />
        </group>
      </group>
      <group
        position={[-0.69, 1.86, 1.35]}
        rotation={[-3.14, -0.49, -3.14]}
        scale={0}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-63.5, -2.36, -21.03]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                geometry={nodes.BackPlate_BackPlate_0.geometry}
                material={materials.BackPlate}
              />
            </group>
            <group
              position={[-59.14, -0.25, -16.85]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                geometry={nodes.Keycap_Keycaps_0.geometry}
                material={materials.Keycaps}
              />
            </group>
          </group>
        </group>
      </group>
      <directionalLight intensity={1} decay={2} position={[5.45, 3.21, 9.23]} />
    </group>
  );
}

useGLTF.preload("scene.gltf");
