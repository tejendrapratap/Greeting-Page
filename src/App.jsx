import React from "react";

function App() {
  const hours = new Date().getHours();
  let greet = "";
  const greetStyle = {},
    backimg = {};
  if (hours >= 5 && hours < 12) {
    greet = "Good Morning";
    greetStyle.color = "#00b894";
    // backimg.backgroundImage = "url(/greeting-page/src/images/sunrise.jpg)";
    backimg.backgroundImage = "linear-gradient(#7ed5f7, #ffffff)";
    backimg.border = "5px solid blue";
  } else if (hours >= 12 && hours < 17) {
    greet = "Good Afternoon";
    greetStyle.color = "#ff3b05";
    // backimg.backgroundImage = "url(/greeting-page/src/images/Noon.jpg)";
    backimg.backgroundImage = "linear-gradient(#fffb00, #ffffff)";
    backimg.border = "5px solid #fc8403";
  } else if (hours >= 17 && hours < 20) {
    greet = "Good Evening";
    greetStyle.color = "#053fb3";
    // backimg.backgroundImage = "url(/greeting-page/src/images/sunset.jpg)";
    backimg.backgroundImage = "linear-gradient(red, yellow)";
    backimg.border = "5px solid #9c1b0c";
  } else {
    greet = "Good Night";
    greetStyle.color = "#1b185e";
    // backimg.backgroundImage = "url(/greeting-page/src/images/Night.jpg)";
    backimg.backgroundImage = "linear-gradient(#100945, #0626ba)";
    backimg.border = "5px solid #f7ff05";
  }
  return (
    <>
      <div class="div1" style={backimg}>
        <div class="div2">
          <h1>
            Hello Sir, <span style={greetStyle}>{greet}</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
