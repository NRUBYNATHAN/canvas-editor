import { Route, Routes } from "react-router-dom"
import Homes from "./Homes"
import Canvas from "./Canvas"
import MyProject from "./MyProject"
import CanvasEdit from "./CanvasEdit"
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homes/>}/>
        <Route path="/canvas" element={<Canvas/>}/>
        <Route path="/project" element={<MyProject/>}/>
        <Route path="/canvas-editor/:canvas" element={<CanvasEdit/>}/>
      </Routes>
    </div>
  )
}

export default App
