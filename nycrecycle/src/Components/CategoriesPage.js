import './CategoriesPage.css';
import React, { useState } from 'react';


const CategoriesPage = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to render content based on the selected category
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'Plastic':
        return <p>Details about recycling plastic materials...</p>;
      case 'Paper':
        return <p>Information on recycling paper products...</p>;
      case 'Glass':
        return <p>Guidelines for recycling glass...</p>;
      case 'Metal':
        return <p>Instructions for recycling metal items...</p>;
      default:
        return <p>Select a category to learn more about recycling!</p>;
    }
  };

  return (
    <div className="categories-page">
      <h1>Explore Recycling Categories</h1>
      
      {/* Buttons for each category */}
      <div className="buttons-container">
        <button onClick={() => setSelectedCategory('Plastic')}>Plastic</button>
        <button onClick={() => setSelectedCategory('Paper')}>Paper</button>
        <button onClick={() => setSelectedCategory('Glass')}>Glass</button>
        <button onClick={() => setSelectedCategory('Metal')}>Metal</button>
      </div>
      
      {/* Display content for the selected category */}
      <div className="category-content">
        {renderCategoryContent()}
      </div>
    </div>
  );
};

export default CategoriesPage;
