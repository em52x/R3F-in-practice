import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";

function App() {
  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
      {/* Cuadro de instrucciones */}
      <div className="instructions">
        <p>Press W A S D to move</p>
        <p>Press K to swap camera</p>
        <p>Press R to reset</p>
        <p>Press arrows for flips</p>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
