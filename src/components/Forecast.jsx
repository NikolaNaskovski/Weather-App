import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      {/* <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div> */}

<div className="flex flex-row items-center justify-between text-white">
          <div
            
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">Monday</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">34°</p>
          </div>

          <div
            
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">Twosday</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">34°</p>
          </div>

          <div
            
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">Wensday</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">34°</p>
          </div>

          <div
            
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">Thursday</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">34°</p>
          </div>

          <div
            
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">Friday</p>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">34°</p>
          </div>
      </div>

    </div>
  );
}

export default Forecast;