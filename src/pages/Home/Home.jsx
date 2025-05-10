import React from 'react'
import { About, CoreSkill, Herosection, History, VisiMission, WorkForce } from '../../layout'
import Achievements from '../../layout/Achievement/Achievement'

const Home = () => {
  return (
    <div>
        <Herosection/>
        <About/>
        <History/>
        <VisiMission/>
        <Achievements/>
        <CoreSkill/>
        <WorkForce/>
    </div>
  )
}

export default Home