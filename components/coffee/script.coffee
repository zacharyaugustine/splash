$ ->
  $("#experience").click ->
    $(".elevator-pitch").fadeOut(200, ->
      $(".nav-initial").addClass("nav-secondary")
      $(".projects").addClass("projects-hidden")
    )