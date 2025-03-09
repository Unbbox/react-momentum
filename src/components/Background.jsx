import { useEffect, useState } from "react";
import "./Background.css";

import img1 from "../assets/PC43.jpg";
import img2 from "../assets/PC44.jpg";
import img3 from "../assets/PC45.jpg";
import img4 from "../assets/PC46.jpg";
import img5 from "../assets/PC47.jpg";
import img6 from "../assets/PC48.jpg";
import img7 from "../assets/PC49.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const getRandomImage = () => {
  const randomIdx = Math.floor(Math.random() * images.length);
  return images[randomIdx];
};

function Background() {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(getRandomImage());
  }, []);

  document.body.style.backgroundImage = `url(${image})`;
}

export default Background;
