function showInform(){
  // console.log("Hello");
  document.getElementById("inform").style.display = "block";
  // document.write("Hello");
}
function hideInform(){
  // console.log("Hello");
  document.getElementById("inform").style.display = "none";
  // document.write("Hello");
}

function trackClicks(){
  const resumeLink = document.querySelectorAll(".track");
  resumeLink.forEach( function(currentValue, currentIndex, listObj) {
    currentValue.addEventListener("click", function () {trackClick(currentValue.id);});
  });
}

function trackClick(name){
  rudderanalytics.track(
    "Click", 
    {
      value: name
    },
    () => {console.log("in track call: " + name)}
  )
}