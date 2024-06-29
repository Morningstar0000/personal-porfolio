import React from "react";
import { Portdata } from "./PortData";

function PortCategory({ setItem, filterItem} ) {
 
    // Extract unique categories from the Images array
    const Categories = [...new Set(Portdata.map(img => img.category))];
  
    
  
    return (
      <>
        <div style={{ width:"100%"}}>
          <ul className="ctglist" style={{ color:"#eeeeec"}}>
          <ul onClick={() => setItem(Portdata)} >All</ul>
            {Categories.map(category => (
              <li key={category} onClick={() =>filterItem(category)}>{category}</li>
            ))}
           
          </ul>
        </div>
      </>
    );
  }
  
  export default PortCategory;