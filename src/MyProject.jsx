import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MyProject.css";
import Button from '@mui/material/Button';
function MyProject() {
    
    const [ru,setRu]=useState([])
    const navigate = useNavigate();
  console.log(ru)
 
    useEffect(() => {
  
      const savedCanvasData = localStorage.getItem('savedCanvasData');
   console.log(JSON.parse(savedCanvasData).objects)
   const maha = JSON.parse(savedCanvasData).objects;
   setRu(maha)
     } ,[]);
  
    const handleEditCanvas = (canvas) => {

      navigate(`/canvas-editor/${canvas.text}`);
      
    };
  
    return (
      <div className='project'>
        <h2>My Projects</h2>
       {ru==="" ?<h1>there are no projects</h1> :
        <div className="canvas-list">
          {ru.map((canvas,index) => (
            <div key={index} className="canvas-item">
              <div className='one'>
              <p className='name'  onClick={() => handleEditCanvas(canvas)}>{canvas.text}</p>
             
             <Button variant='contained' onClick={() => handleEditCanvas(canvas)}>Edit</Button>
              </div>
            
            </div>
          ))}
        </div>}
      </div>
    );
  }


export default MyProject;
