  import React from "react";
  import TodayStatus from "./TodayStatus";
  import AccessStatistics from "./AccessStatistics";
function Homepage() {
    return (
        <div className="container-fluid mt-5 ml-5">
            <TodayStatus/>
            <AccessStatistics/>
        </div>
    );
}

export default Homepage;
