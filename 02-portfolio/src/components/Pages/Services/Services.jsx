import React from "react";
import "./Services.scss";
import { ServData } from "./Data";
import { Logoimage } from "./Logoimg";
import Pricing from "./Pricing";
import Tst from "./Tst";
import Servicedetails from "./Servicedetails";

function Services() {
  return (
    <>
      <div id="fadeInUp-animation">
        <div  className="Servicebtn">
          <button>Services</button>
          <h3 style={{ paddingTop:"20px"}}>What I Do</h3>
        </div>
        <div className="servData">
          {ServData.map((s) => (
            <div key={s.id} className="serviceItem">
              <h6 className="num">{s.num}</h6>
              <h3 >{s.title}</h3>
              <p>{s.intro}</p>
              <Servicedetails s={s} />
            </div>
          ))}
        </div>
        {/* Partners */}
        <div>
          <div className="Partners">
          <h4>Partners</h4>
          <div className="Partner">
            {Logoimage.map((image, index) => (
              <img
                key={index}
                src={image.img}
                alt=""
                className="partnerImage"
              />
            ))}
          </div>
          </div>
        </div>
        {/* Pricing */}
        <div>
          <Pricing/>
          <Tst />
        </div>
      </div>
    </>
  );
}

export default Services;
