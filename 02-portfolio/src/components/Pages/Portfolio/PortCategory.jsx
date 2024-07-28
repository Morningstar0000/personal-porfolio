import React from "react";
import { useState } from "react";
import { Portdata } from "./PortData";

function PortCategory({ setItem, filterItem} ) {
  const [activeItem, setActiveItem] = useState(null);
 
    // Extract unique categories from the Images array
    const Categories = [...new Set(Portdata.map(img => img.category))];
  
    const HandleItemsClick = (Category) => {
       setActiveItem(Category);
       filterItem(Category);
    }
  
    const handleAllClick = () => {
      setActiveItem(null); // Reset active category
      setItem(Portdata); // Set all items
    };

    return (
      <>
        <div style={{ width:"100%"}}>
          <ul className="ctglist" style={{ color:"#eeeeec"}}>
          <li className={activeItem === null ? "active" : ""} onClick={handleAllClick} >All</li>
            {Categories.map(category => (
              <li key={category} className={activeItem === category ? "active" : ""} onClick={()=>HandleItemsClick(category)}>{category}</li>
            ))}
           
          </ul>
        </div>
      </>
    );
  }
  
  export default PortCategory;