import React, {useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ElectronicsPage.css';

// Fix for default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Function to fetch data for Electronics category
const ElectronicsPage = () => {
  // State to track the selected category

  const [electronicsData, setElectronicsData] = useState([]);

  // use useEffect to fetch data when the selected category changes to Electronics
  useEffect(() => {
      fetch('https://data.cityofnewyork.us/resource/wshr-5vic.json')
        .then(response => response.json())
        .then(data => setElectronicsData(data))
        .catch(error => console.error('Error fetching data:', error));
    
  });

  // Function to render content based on the selected category
  const renderCategoryContent = () => {

        return (
          <div>
            <h2>Electronics Recycling Locations</h2>
            <MapContainer center={[40.7128, -74.0060]} zoom={10} className = "map-container">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {electronicsData.map((location, index) => (
                <Marker
                  key={index}
                  position={[location.latitude, location.longitude]}
                >
                  <Popup>
                    <strong>{location.dropoff_sitename}</strong><br />
                    Address: {location.address}<br />
                    Zipcode: {location.zipcode}<br />
                    Borough: {location.borough}<br />
                    Neighborhood: {location.ntaname}<br />
                    Community District: {location.community_district}<br />
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

          </div>
        );
  
  };

  return (
    <div className="electronics-page">
      <h1>Explore the map for dropping electronics</h1>
    
      
      {/* Display content for the selected category */}
      <div className="map-wrapper">
        {renderCategoryContent()}
      </div>

    </div>
  );
};

export default ElectronicsPage;