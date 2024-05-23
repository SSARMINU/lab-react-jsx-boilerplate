import React, { Component } from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";  // Ensure this path is correct

const imageData = () => {
  return [
    { id: 1, img: elephant },
    { id: 2, img: elephant },
    { id: 3, img: elephant },
    { id: 4, img: elephant },
  ];
}

class AppClass extends Component {
  render() {
    const images = imageData();

    return (
      <div className="image-gallery">
        {images.map((img) => (
          <div key={img.id} className="image-container">
            <img src={img.img} alt={`img-${img.id}`} className="image" />
          </div>
        ))}
      </div>
    );
  }
}

export default AppClass;
