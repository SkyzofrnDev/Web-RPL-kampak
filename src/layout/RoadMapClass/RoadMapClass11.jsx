import React from "react";
import { RoadMap } from "../../components/Index";
const journeyData = [
    {
      "image": "/path/to/image1.svg",
      "desc": "Description for the first journey entry."
    },
    {
      "image": "/path/to/image2.svg",
      "desc": "Description for the second journey entry."
    },
    {
      "image": "/path/to/image3.svg",
      "desc": "Description for the third journey entry."
    }
  ]
const RoadMapClass11 = () => {
  return (
    <div>
      <RoadMap data={journeyData}/>
    </div>
  );
};

export default RoadMapClass11;
