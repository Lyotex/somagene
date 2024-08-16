import React from "react";
import { LiaVialsSolid } from "react-icons/lia";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
            At MEDITRIC-BIO Pvt. Ltd., we offer a wide range of high-quality
            peptides, amino acids, SPPS resins, and custom synthesis services.
            Our products are designed to support the life sciences and
            pharmaceutical industries, ensuring precision, reliability, and
            competitive pricing for all your research and development needs.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <a href={`${d.address}`}>
                    {/* <img className={d.icon} style={{color:"red"}}></img> */}
                    <LiaVialsSolid className="iconspro" />
                  </a>
                  <div className="service-desc">
                    <a href={`${d.address}`}>
                      <h3>{d.name}</h3>
                    </a>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
