import React from "react";
import { useState } from "react";
import { Portdata } from "./PortData";
import PortCategory from "./PortCategory";
import Product from "./Product";
import "./Portfolio.scss";

function Portfolio() {
  const [item, setItem] = useState(Portdata);

  // Filtered function
  const filterItem = (ctg) => {
    const newItem = Portdata.filter((newVal) => {
      return newVal.category === ctg;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  return (
    <>
      <div>
        <div className="portbtn">
          <button >Porfolio</button>
        </div>

        <div className="portfolio-title">
          <h4>Creative Portfolio</h4>
          <div className="ctg">
            <PortCategory filterItem={filterItem} setItem={setItem} />
          </div>
        </div>

        <div>
          <Product item={item} />
        </div>
      </div>
    </>
  );
}

export default Portfolio;


