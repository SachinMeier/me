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

$(window).resize(function(){
  adjustHeights();
});

