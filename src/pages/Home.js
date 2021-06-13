import React from "react";
import "./Home.css";
import ACMlogoHome from "../images/ACM logo textRight.svg";

export default function Home() {
  return (
    <div>
      <div className="Bdome">
        <img src={ACMlogoHome} style={{ width: "50%", justify: "center" }} />
      </div>
    </div>
  );
}
