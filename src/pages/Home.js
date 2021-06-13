import React from "react";
import Timeline from "../components/Timeline";
import './Home.css';
import ACMlogoHome from '../images/ACM logo textRight.svg'

export default function Home() {
  return (
    <div >
      <div className="Bdome">
        <img src={ACMlogoHome} style={{width: '50%', justify: 'center'}}/>
      </div>
      {/* <Timeline /> */}
    </div>
  );
}