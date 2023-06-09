import { Center, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";

function ImageSlicer() {
  const [showImage, setShowImage] = useState(false);
  const [lastImageNumber, setLastImageNumber] = useState(0);

  function handleClick() {
    setShowImage(true);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "../images/" + lastImageNumber + ".png";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 600, 400);
      setLastImageNumber(0);
    };
  }

  function updateImage() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "../images/" + lastImageNumber + ".png";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 600, 400);
      if (lastImageNumber < 7) {
        setLastImageNumber(lastImageNumber + 1);
      } else {
        setLastImageNumber(0);
      }
    };
  }

  return (
    <Flex justifyItems="center" alignItems="center">
      <div>
        <canvas id="canvas" width="600" height="400"></canvas>
        <br />
        <Button onClick={handleClick} colorScheme="green">
          Show image
        </Button>
        <div>
          <br />
          <Button onClick={updateImage} colorScheme="green">
            Change image
          </Button>
        </div>
        <div>
          <br />
          <Link href="/showplant">
            <Button colorScheme="green">Go Back</Button>
          </Link>
        </div>
      </div>
    </Flex>
  );
}

export default ImageSlicer;
