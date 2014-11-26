$ ->
  $("#experience").click ->
    $(".elevator-pitch").fadeOut(500, ->
      $(".projects").fadeOut("slow")
      $(".nav-initial").delay(500).addClass("nav-secondary")
      $("#resume").delay(1000).fadeIn("fast")
    )

  $("#nav-back").click ->
    $("#resume").fadeOut(500, ->
      $(".nav-initial").delay(500).removeClass("nav-secondary")
      $(".elevator-pitch").delay(1000).fadeIn("fast")
    )