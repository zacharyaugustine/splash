$(function() {
  return $("#experience").click(function() {
    return $(".elevator-pitch").fadeOut(200, function() {
      $(".nav-initial").addClass("nav-secondary");
      return $(".projects").addClass("projects-hidden");
    });
  });
});
