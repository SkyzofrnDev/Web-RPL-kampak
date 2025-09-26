import React from "react";
import {
  About,
  CoreSkill,
  Herosection,
  History,
  News,
  Partnership,
  RoadMapClass,
  VisiMission,
  WorkForce,
} from "../../layout";
import Achievements from "../../layout/Achievement/Achievement";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Herosection />
      </div>
      <div id="identity">
        <About />
      </div>
      <div id="history">
        <History />
      </div>
      <div id="visi-misi">
        <VisiMission />
      </div>
      <div id="achivments">
        <Achievements />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="technology">
        <RoadMapClass />
      </div>
      <div id="core-skill">
        <CoreSkill />
      </div>
      <div id="workforce">
        <WorkForce />
      </div>
      <div id="partnership">
        <Partnership />
      </div>
    </div>
  );
};

export default Home;
