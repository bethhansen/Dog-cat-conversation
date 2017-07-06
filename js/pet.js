$(document).ready(function() {//this tells jquery to load and be ready for the elements that follow below it.
  $("button#hello").click(function() {//this makes the hello button clickable
    $("ul#cat").prepend("<li>Meow!</li>");//this prepend method will then add meow to the cat list only
    $("ul#dog").prepend("<li>Woof!</li>");//this prepend method will then add whoof to the dog list only
    $("ul#cat").children("li").first().click(function() {
      alert("Help!");
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Me-Ouch!</li>");
    $("ul#dog").prepend("<li>Wfoopie!</li>")
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>Me-You</li>");
    $("ul#dog").prepend("<li>Woof-Ya!</li>")
  });
  $("div#kitten").click(function() {
    $("div#kitten").after("<img src='img/kitten.jpg'>");
    $("img").click(function() {
      $(this).remove();
    });
  });
  $("div#puppy").click(function() {
    $("div#puppy").after("<img src='img/puppy.jpg'>");
    $("img").click(function() {
      $(this).remove();
    });
  });
});
