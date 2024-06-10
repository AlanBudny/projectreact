import React from 'react';

const Gallery = () => {
  const images = [
    { src:"/images/pizzeria1.jpg", alt:"Pizzeria 1" },
    { src:"/images/pizzeria2.jpg", alt:"Pizzeria 2" },
    { src:"/images/pizzeria3.jpg", alt:"Pizzeria 3" },
    { src:"/images/pizzeria4.jpg", alt:"Pizzeria 4" },
  ];
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-items">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
