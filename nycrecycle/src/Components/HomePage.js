import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-page">
      <section className="section">
        <div className="text">
          <h2>General Curbside Recycling Guidelines</h2>
          <p>Place recycling at the curb after 6 PM in a secure, labeled bin (max 55 gallons) or in clear bags after 8 PM. 
            Bundle cardboard and set it next to bins; avoid using cardboard as bins. Make sure all items are ready by midnight for collection.</p>
        </div>
      </section>
      <section className="section">
        <div className="text">
          <h2>Learn to recycle properly in NYC</h2>
          <p>If you are not sure how to recycle and catogorizes the trashes. Press the button below to get educated and explore the options</p>
          <Link to="/CategoriesPage">
            <button>Learn How to Recycle</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
