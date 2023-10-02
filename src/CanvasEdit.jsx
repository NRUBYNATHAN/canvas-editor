import  { useEffect } from 'react';
import { fabric } from 'fabric';
import { useParams } from 'react-router-dom';
import  "./Canvas.css";
function CanvasEdit() {
    const {canvas}=useParams();
    const data =canvas;
    console.log(data)



  useEffect(() => {
    
    const newCanvas = new fabric.Canvas(data, {
      width: 800,
      height: 500,
      backgroundColor: 'white',
    });
 
  
    const savedCanvasData = data;
    if (savedCanvasData) {
     
        newCanvas.renderAll();
     
    }
  }, [data]);





  return (
    <div className='canvas'>
      <h2>Canvas Editor</h2>
      <p>{data}</p>
    
      <canvas
        id={data} 
        width={800}
        height={500}
        style={{ border: '2px solid #000'}}
      ></canvas>
    </div>
  );
}

export default CanvasEdit;
