import React, { useState, useEffect } from "react";

const Nasa = () => {
    const [Nasa, setNasa] = useState([]);




    useEffect(() => {
        const fetchNasa = async () => {
            const url =
                "https://epic.gsfc.nasa.gov/EPIC/api";
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": "THWrMDFsVhKnXm82MQbKNokqhcRV2ZPnvuxc1oyQ",
                    "X-RapidAPI-Host": "https://epic.gsfc.nasa.gov/EPIC/api",

                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setNasa(result.nasa); // Assuming the array of food items is in the 'food' property
            } catch (error) {
                console.error(error);
            }
        };

        fetchNasa();
    },
        []);


    return (
       
            <div className="nasa-container">
               {nasa.map((nasa) => ( 
                <article className="nasa-cards" key={nasa.id}>
                  <h3>{nasa.name}</h3>
                  <p>{nasa.description}</p>
                </article>
              ))}
            </div>
          );
        };
        
        export default Nasa;
        