import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';

const BuildingEnergyComsumption = () => {
    const {K2, techPark, londonRoad, boroughRoad, perryLibaray, clearanceCenter, keyworthCenter, mclarenHouse,total} = InfoLsbu();
    console.log(total);
    console.log(K2);
   
    return (
       
        <div className="main--lsbu--container">
           
           <Section dataGiven={total} type="Energy" title={ total && total.titleEnergy} />
            <Section dataGiven={K2} type="Energy" title={K2 && K2.title}/>
            <Section dataGiven={techPark} type="Energy" title={techPark && techPark.title} />
            <Section dataGiven={londonRoad} type="Energy" title={londonRoad && londonRoad.title} />
            <Section dataGiven={boroughRoad} type="Energy" title={boroughRoad && boroughRoad.title} />
            <Section dataGiven={perryLibaray} type="Energy"  title={ perryLibaray && perryLibaray.title}/>
            <Section dataGiven={clearanceCenter} type="Energy"  title={ clearanceCenter && clearanceCenter.title}/>
            <Section dataGiven={keyworthCenter} type="Energy"  title={ keyworthCenter && keyworthCenter.title}/>
            <Section dataGiven={mclarenHouse} type="Energy"  title={mclarenHouse && mclarenHouse.title}/>
            

         
            
            
        </div>
    
        
    )
}

export default BuildingEnergyComsumption
