import React, { useState } from 'react';
import './carousel.css'; // Create a CSS file for styling

const Carousel = ({ cards }) => {
  // State to keep track of the currently visible cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next set of cards
  const nextSlide = () => {
    // Calculate the next index while keeping it within bounds
    const nextIndex = (currentIndex + 4) % cards.length;
    setCurrentIndex(nextIndex);
  };

  // Function to move to the previous set of cards
  const prevSlide = () => {
    // Calculate the previous index while keeping it within bounds
    const prevIndex = (currentIndex - 4 + cards.length) % cards.length;
    setCurrentIndex(prevIndex);
  };

  // Render the carousel with visible cards
  return (
    <div className="carousel">
      <div className="cards-container">
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div className="card" key={index}>
            {card}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &lt; Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next &gt;
      </button>
    </div>
  );
};

export default Carousel;
