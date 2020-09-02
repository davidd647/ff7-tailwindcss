console.log($);

$(".nav-toggle").on("click", function () {
  console.log("clicked me!");
  $("nav > ul").toggleClass("hidden");
});
