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

function adjustHeights(){
  if ($(window).width()>=950)
  {
    var x = $(window).height();
    $(".image").css("height",x);
    $(".name").css("height",x);
  }
  else {
    $(".image").css("height","auto");
    $(".name").css("height","auto");
  }
}

adjustHeights();
trackClicks();

$(window).resize(function(){
  adjustHeights();
});

