import React from 'react'
import { About, CoreSkill, Herosection, History, Partnership, VisiMission, WorkForce } from '../../layout'
import Achievements from '../../layout/Achievement/Achievement'
import RoadMapClass from '../../layout/RoadMapClass/RoadMapClass'

const Home = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <History/>
        <VisiMission/>
        <Achievements/>
        <RoadMapClass/>
        <CoreSkill/>
        <WorkForce/>
        <Partnership/>
    </div>
  )
}

export default Home