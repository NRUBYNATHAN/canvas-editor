import  { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import  "./Canvas.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Canvas() {
  const [canvasText, setCanvasText] = useState('');
  const [canvas, setCanvas] = useState(null); 


  useEffect(() => {
   
    const newCanvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 500,
      backgroundColor: 'white',
    });
    setCanvas(newCanvas);
   
    const savedCanvasData = localStorage.getItem('savedCanvasData');
    if (savedCanvasData) {
      newCanvas.loadFromJSON(savedCanvasData, () => {
        newCanvas.renderAll();
      });
    }
  }, []);




  const handleTextChange = (e) => {
    setCanvasText(e.target.value);
  };

  const handleAddText = () => {
    if (canvasText.trim() !== '') {
      if (canvas) {
        const newText = new fabric.Text(canvasText, {
          left: 100,
          top: 100,
          fontSize: 20,
        });
        canvas.add(newText);
        canvas.renderAll();
        setCanvasText('');

    
      }
    }
  };

  const handleSaveText = () => {
   
      if (canvas) {
        localStorage.setItem('savedCanvasData', JSON.stringify(canvas.toJSON()));
      }
   
  };
  return (
   

   
    <div className='canvas'>
      <h2>Canvas Text Page</h2>
      <div className='inputs'>
        <TextField  label="Enter Text" variant="outlined"
          type="text"
          
          value={canvasText}
          onChange={handleTextChange}
        />
        <div className='canvas_btn'>
        <Button variant="contained" onClick={handleAddText}>Add Text</Button>
        <Button variant="contained" onClick={handleSaveText}>Save Text</Button>
        </div>
    
      </div>
      <canvas
        id="canvas" 
        width={1000}
        height={500}
        style={{ border: '2px solid #000'}}
      ></canvas>
    </div>
   
  );
}

export default Canvas;
