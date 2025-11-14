import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list) {
    // Optional: show a loading state or fallback
    return <p className="loading-food">Loading Food Items...</p>;
  }
console.log(food_list);
  return (
    <div className='food-display' id='food-display'>
      <h2 id="topdish">Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                image={item.image}
                name={item.name}
                desc={item.description}
                price={item.price}
                id={item._id}
                isVerified={item.isVerified} 
                
                
              />
            );
          }
          return null;
        })}
      </div>
      <hr className="HR" />
      
    </div>
    
  );
};


export default FoodDisplay
