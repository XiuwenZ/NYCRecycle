import './RecyclablesPage.css';
import React, { useState } from 'react';

// Function to fetch data for Electronics category
const RecyclablesPage = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);


  // Function to render content based on the selected category
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'Plastic':
        return (
          <div className="categories">
            <p><strong>Rules for Recycling Plastic</strong></p>
            <ul>
              <li>Rinse plastic containers, beverage cartons, and drink boxes before recycling</li>
              <li>Plastic can be mixed with metal and glass recyclables, but never with paper recyclables.</li>
              <li>Place plastic items in clear, untinted bags or blue-labeled recycling bins with a tight-fitting lid.</li>
              <li>Clear, untinted bags must be between 13 and 55 gallons in size and weigh no more than 60 pounds when placed out for collection.</li>
              <li>Containers must be 32 gallons or less and have blue labels on both sides and the lid. Containers must weigh no more than 60 pounds when placed out for collection.</li>
            </ul>
            <p>To dispose of a plastic recycling or trash container, all receptacles should be clearly labeled as trash and put at the curb on the proper recycling collection day so that the Department of Sanitation will know that they should be collected.</p>
            
            <p><strong>Plastic Items That Can Be Recycled</strong></p>
            <ul>
              <li>Appliances made of plastic</li>
              <li>Beverage cartons and drink boxes (juice cartons, juice boxes)</li>
              <li>Bottles, cups, jars, and jugs (regardless of recycling number on container bottom)</li>
              <li>Bulk plastic (crates, buckets, pails, furniture, large toys, large appliances, etc.)</li>
              <li>CD and DVD cases</li>
              <li>Hangers</li>
              <li>Milk cartons</li>
              <li>Plastic cutlery (spoons, forks, knives)</li>
              <li>Plates</li>
              <li>Rigid plastic caps and lids</li>
              <li>Rigid plastic food containers (tupperware, yogurt, deli, hummus, dairy tubs, cookie tray inserts, "clamshell" containers, and other plastic takeout containers)</li>
              <li>Rigid plastic housewares (flower pots, mixing bowls, plastic appliances, etc.)</li>
              <li>Rigid plastic non-food containers</li>
              <li>Rigid plastic packaging ("blisterpak" and "clamshell" consumer packaging, acetate boxes)</li>
              <li>Satellite dishes</li>
              <li>Telephones</li>
            </ul>
            
            <p><strong>Plastic Items That Can't Be Recycled</strong></p>
            <ul>
              <li>3-ring binders (if separate, the metal rings can be recycled)</li>
              <li>Bags, wrappers, shower curtains, and all kinds of plastic "film"</li>
              <li>Balls (basketballs, bowling balls, soccer balls, footballs, yoga balls, etc.)</li>
              <li>Cassettes, VHS tapes</li>
              <li>CDs, DVDs, disks, vinyl records</li>
              <li>Cell phones</li>
              <li>Containers that held dangerous or corrosive chemicals</li>
              <li>Garden hoses</li>
              <li>Lighters</li>
              <li>Luggage</li>
              <li>Pens and markers</li>
              <li>PVC pipes (must be no longer than 4 feet)</li>
              <li>Rings from soda and beer cans</li>
              <li>Single-serve food and drink squeezable pouches (juice pouches, baby food squeeze pouches, yogurt-to-go pouches, etc.)</li>
              <li>Styrofoam/plastic foam items (foam cups, foam egg cartons, foam trays, foam packing peanuts, foam sporting equipment, etc.)</li>
              <li>Tubes (toothpaste, lotion, cosmetics, etc.)</li>
              <li>Umbrellas</li>
            </ul>
            
            <p><strong>Plastic Recycling Numbers</strong></p>
            <p>Some plastic products or containers show symbols with numbers inside the chasing arrows. The number symbols refer to the type of materials the item is made of.</p>
            <p>The Department of Sanitation does not provide guidelines for disposing of an item based on its recycling number. To determine items that are acceptable for recycling, you must check the list of recyclable items.</p>
            
            <p><strong>Trash, Recycling, or Compost Container</strong></p>
            <p>Throw out metal or rigid plastic trash, recycling, or compost containers with your recycling items. Put a label on the container that says "Sanitation, please take this can away" so that the Department of Sanitation knows to take it.</p>
          </div>

        );
      case 'Glass':
        return (<div className="categories">
          <p><strong>Rules for Recycling Glass</strong></p>
          <ul>
            <li>Only glass bottles and jars may be recycled as glass.</li>
            <li>Rinse the glass before you recycle it.</li>
            <li>Glass can be mixed with metal and plastic recyclables, but never with paper recyclables.</li>
            <li>Place glass in clear, untinted bags or blue-labeled recycling bins secured with a tight-fitting lid.</li>
            <li>Clear, untinted bags must be between 13 and 55 gallons in size and weigh no more than 60 pounds when placed out for collection.</li>
            <li>Containers must be 32 gallons or less and have blue labels on both sides and the lid. Containers must weigh no more than 60 pounds when placed out for collection.</li>
          </ul>
          
          <p><strong>Glass Items That Can't Be Recycled</strong></p>
          <ul>
            <li>Drinking glasses and glassware</li>
            <li>Eyeglasses</li>
            <li>Glass tables</li>
            <li>Glass windows</li>
            <li>Light bulbs</li>
            <li>Mirrors</li>
          </ul>
          
          <p><strong>Broken Glass</strong></p>
          <p>To avoid bag punctures, broken glass should be placed into a cardboard box labeled "broken glass." The box should be sealed with tape and placed into a trash can or securely tied trash bag. Small containers of broken glass may be placed directly into a trash can or bag.</p>
          <p>Larger, properly sealed, and labeled cardboard boxes that contain broken glass can be placed out for collection next to regular refuse containers/bags.</p>
          <p>The broken ends of smaller single pieces of broken glass can sometimes be protected with several pages of newspaper taped around the broken end before being placed into a trash can or bag.</p>
          
          <p></p>
        </div>);
      case 'Metal':
        return (
          <div className="categories">
            <p><strong>Rules for Recycling Metal</strong></p>
            <ul>
              <li>Metal can be mixed with plastic and glass recyclables, but never with paper recyclables.</li>
              <li>Place metal items in clear, untinted bags or blue-labeled recycling bins with a tight-fitting lid.</li>
              <li>Clear, untinted bags must be between 13 and 55 gallons in size and weigh no more than 60 pounds when placed out for collection.</li>
              <li>Containers must be 32 gallons or less and have blue labels on both sides and the lid. Containers must weigh no more than 60 pounds when placed out for collection.</li>
            </ul>
            
            <p>
              Large metal items, such as appliances, must be placed curbside next to the recycling container. For appliances containing CFC gas, a 
              <a class="kalink" target="_blank" href="/article/?kanumber=KA-01792"> CFC and Freon Removal</a> appointment must be made prior to disposal.
            </p>
            
            <p>
              To dispose of a metal recycling or trash container, all receptacles should be clearly labeled as refuse and put at the curb on the proper recycling collection day so that the Department of Sanitation will know that they should be collected.
            </p>

            <p><strong>Metal Items That Can Be Recycled</strong></p>
            <ul>
              <li>Aerosol cans (empty)</li>
              <li>Aluminum foil wrap and trays</li>
              <li>Clean metallic car parts</li>
              <li>Dried-out paint cans (metal lid may be recycled separately)</li>
              <li>Faucets</li>
              <li>Food cans (empty and clean)</li>
              <li>Household metal (wire hangers with paper removed)</li>
              <li>Irons</li>
              <li>Knife blades (wrap in cardboard, tape, label "CAUTION: SHARP" and place with metal/glass/plastic recyclables)</li>
              <li>Lighting fixtures</li>
              <li>Nuts and bolts</li>
              <li>Metal utensils (including forks, spoons, and knives)</li>
              <li>Metal caps</li>
              <li>Pots and pans</li>
              <li>Satellite dish</li>
              <li>Small appliances that are mostly metal</li>
            </ul>

            <p><strong>Bulky Metal Items</strong></p>
            <p>Large items that are all metal or mostly metal are recyclable as bulk items. If an item exceeds the listed weight, height, or amount requirements, you must hire a private carter for disposal.</p>
            <p>For safety reasons, remove doors from large appliances (such as refrigerators, dryers, and washing machines) before setting them out.</p>

            <p>Large items that are all metal or mostly metal and are recyclable as bulk items include:</p>
            <ul>
              <li>Air conditioners</li>
              <li>Auto parts (no hazardous materials or chemicals)</li>
              <li>Aluminum lawn furniture with plastic webbing</li>
              <li>Barbecue grills</li>
              <li>Bedsprings/Metal bed frames</li>
              <li>Bicycles</li>
              <li>Boilers</li>
              <li>Cabinets and appliances</li>
              <li>Clothes dryers</li>
              <li>Dishwashers</li>
              <li>Furniture</li>
              <li>Generators (less than 100 pounds)</li>
              <li>Lawnmower (empty fuel for reuse or SAFE disposal)</li>
              <li>Ovens</li>
              <li>Pipes (no longer than 4 feet)</li>
              <li>Porcelain coated metal bathtubs and sinks</li>
              <li>Radiators</li>
              <li>Snow blowers (less than 100 pounds)</li>
              <li>Washing machines</li>
              <li>Water heaters (50 gallons or less)</li>
            </ul>

            <p><strong>Metal Compressed Gas Tanks</strong></p>
            <p>
              You can put fire extinguishers and helium tanks out for collection or take them back to where you bought them.
              If you put them out, first empty them and remove the head. To empty an extinguisher, spray it into a damp paper bag.
            </p>
            <p>
              Sanitation does not collect used compressed gas tanks such as propane, oxygen, and acetylene because they can explode in the garbage truck. You must take these tanks back to where you bought them.
            </p>

            <p><strong>Trash, Recycling, or Compost Container</strong></p>
            <p>
              Throw out metal or rigid plastic trash, recycling, or compost containers with your recycling items. Put a label on the container that says "Sanitation, please take this can away" so that the Department of Sanitation knows to take it.
            </p>
          </div>

        );
      default:
        return <p><h2>Select a category to learn more about recycling!</h2></p>;
    }
  };

  return (
    <div className="recyclable-page">
      <h1>Explore Recycling Categories</h1>
      
      {/* Buttons for each category */}
      <div className="buttons-container">
        <button onClick={() => setSelectedCategory('Plastic')}>Plastic</button>
        <button onClick={() => setSelectedCategory('Glass')}>Glass</button>
        <button onClick={() => setSelectedCategory('Metal')}>Metal</button>
      </div>
      
      {/* Display content for the selected category */}
      <div>
        {renderCategoryContent()}
      </div>

    </div>
  );
};

export default RecyclablesPage;