import {useEffect} from 'react'
import RoadMapClass10 from './RoadMapClass10'
import RoadMapClass11 from './RoadMapClass11'
import RoadMapClass12 from './RoadMapClass12'
import AOS from "aos";
import "aos/dist/aos.css";

const RoadMapClass = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true,
        });
      }, []);
  return (
    <div   >
        <RoadMapClass10 data-aos="fade-up"/>
        <RoadMapClass11/>
        <RoadMapClass12/>
    </div>
  )
}

export default RoadMapClass