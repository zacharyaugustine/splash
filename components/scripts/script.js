$(function() {
  $("#experience").click(function() {
    return $(".elevator-pitch").fadeOut(500, function() {
      $(".projects").fadeOut("slow");
      $(".nav-initial").delay(500).addClass("nav-secondary");
      return $("#resume").delay(1000).fadeIn("fast");
    });
  });
  return $("#nav-back").click(function() {
    return $("#resume").fadeOut(500, function() {
      $(".nav-initial").delay(500).removeClass("nav-secondary");
      return $(".elevator-pitch").delay(1000).fadeIn("fast");
    });
  });
});
