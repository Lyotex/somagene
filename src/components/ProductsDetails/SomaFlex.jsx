import React, { useEffect, useState } from "react";
import somagene from "../../img/somagene-vials.png";
import { Navigation } from "../navigation";
import { Contact } from "../contact";
import JsonData from "../../data/data.json";


const SomaFlex = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <>

    <Navigation />
      <div style={{marginTop: "90px", marginBottom: "100px"}}>
        <div className="max-w-screen-xl container mx-auto px-2">
          <h1 className="text-lg text-center md:text-3xl font-bold flex gap-1">
            BioGene SomaFlex&trade;
          </h1>
          <p className="text-sm text-center">
            Somatropin for Injection KP{" "}
            <small>(Recombinant Human Growth Hormone for Injection)</small>
          </p>
          <hr className="w-[325px] border-2 rounded border-green-300" />

          <div className="w-full">
            <div className="w-[75%] mt-14">
              <img
                className="rounded-lg shadow-lg"
                src={somagene}
                alt="somagene image"
              />
            </div>

            <div className="mt-20">
              <h1 className="text-2xl font-bold">Efficiency / Impact</h1>

              <h4 className="mt-6 font-bold">For Minors:</h4>
              <ul className="mt-3">
                <li>
                  1. Growth inhibition due to pituitary gland hormone secretion
                  issues
                </li>
                <li>2. Growth inhibition associated with Turner syndrome</li>
                <li>3. Growth inhibition due to chronic kidney disease</li>
                <li>
                  4. Enhancement of growth and body structure in children with
                  Prader-Willi syndrome
                </li>
                <li>
                  5. Failure to achieve expected growth in children who are
                  small for gestational age (SGA)
                </li>
                <li>
                  6. Failure to achieve expected growth in juvenile patients
                  with idiopathic short stature (ISS)
                </li>
              </ul>

              <h4 className="mt-6 font-bold">
                For Adults: As a hormone replacement therapy for adults with
                growth hormone insufficiency confirmed by two dynamic
                evaluations, the patient must satisfy the following conditions:
              </h4>
              <ul className="mt-3">
                <li>
                  1. Childhood-onset insufficiency: Patients identified with
                  growth hormone insufficiency in childhood must be reassessed
                  and confirmed for growth hormone insufficiency prior to
                  commencing hormone replacement therapy.
                </li>
                <li>
                  2. Adult-onset insufficiency: Prior to beginning hormone
                  replacement therapy, secondary growth hormone insufficiency
                  due to hypothalamic or pituitary disorders, along with at
                  least one other hormone insufficiency (excluding prolactin),
                  must be diagnosed and appropriate replacement therapy should
                  be initiated.
                </li>
              </ul>

              <h1 className="text-2xl mt-8 font-bold">
                Active Ingredient and Capacity
              </h1>
              <p className="text-sm">
                Somatropin for Injection KP{" "}
                <small>(Recombinant Human Growth Hormone for Injection)</small>
              </p>

              <h1 className="text-2xl mt-8 font-bold">etc.</h1>
              <h4 className="mt-6 font-bold">Appearance & Packaging Unit</h4>

              <p className="text-sm">
              A dose-adjustable pen-type injection with a transparent cartridge containing a colorless or light yellow solution (Minimum adjustable volume is 0.5IU)
              36IU : 36IU/1.69mL pen x 1 pc./box
              </p>
              <h4 className="mt-6 font-bold">Storage</h4>
              <p className="text-sm mb-20">
                In a hermetic container, keep refrigerated (2~8℃).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default SomaFlex