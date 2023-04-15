import React, { useState } from 'react';

function ImageSlicer() {
  const [showImage, setShowImage] = useState(false);
  const [lastImageNumber, setLastImageNumber] = useState(0);

  function handleClick() {
    setShowImage(true);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../images/'+ lastImageNumber +'.png';
    //img.width = 600;
    //img.height = 400;
    img.onload = () => {
      ctx.drawImage(img, 0,0, 600, 400);
      setLastImageNumber(0);
    };
  }

  function updateImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../images/'+ lastImageNumber +'.png' 
    //img.width = 600;
    //img.height = 400;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 600, 400);
      if (lastImageNumber < 8) {
        setLastImageNumber(lastImageNumber + 1);
      } else {
        setLastImageNumber(0);  
      }
    };
  }

  return (
    <div>
      <canvas id="canvas" width="600" height="400"></canvas>
      <button onClick={handleClick}>Show Image</button>
      {showImage && (
        <div>
          <button onClick={updateImage}>Change image</button>
        </div>
      )}
    </div>
  );
}

export default ImageSlicer;