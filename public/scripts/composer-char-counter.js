$(document).ready(function () {
  // select textaera in class "new-tweet"
  $(".new-tweet textarea").on("keyup", function (event) {
    const countMax = 140;
    const twUp = $(this).val().length;
    const Tdown = countMax - twUp
    $(".counter").text(Tdown);
    if (Tdown <= 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
}); // end of doc ready