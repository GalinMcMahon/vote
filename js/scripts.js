$(document).ready(function() {
  $("#flagactivate").click(function() {
    alert("Submission successful!");
    alert("You are eligible!");
    $('#agecitizenship').show();
    event.preventDefault();
    $('body').css('background-color', 'blue');
  });

  $("ul#thelist").children("li").first().click(function() {
    alert("First list item clicked!");
  });

  $("ul#thelist").children("li:nth-child(2)").click(function() {
    alert("Second list item clicked!");
  });


  $("#formOne").submit(function(event) {
    var citizen = $("input:radio[name=citizen]:checked").val();
      //alert(citizen);
    var nameInput = $("input#name").val();
      //alert(nameInput);
    var ageInput = $("input#age").val();
      //alert(ageInput);

    if (ageInput) {
      if (citizen == 'yes') {
        if (ageInput >= 18) {
          alert("Submission successful!");
          alert("You are eligible!");
          $('#agecitizenship').show();
          $(".nameplace").text(nameInput);
          $("#ageplace").text(ageInput);
          event.preventDefault();
        }

        else {
          alert("Submission successful!");
          $(".nameplace").text(nameInput);
          $('#agefail').show();
          event.preventDefault();
        }

      }

      else {
        alert("Submission successful!");
        $(".nameplace").text(nameInput);
        $('#citfail').show();
        event.preventDefault();
      }
    }

    else {
      alert('Please enter your age.');
    }

    // $(".age").text(ageInput);
    // $("#story").show();
    // event.preventDefault();
  });
});







  // if (age > 100) {
  //   alert("You expect me to believe that!?!?!.");
  //   $('#under-18').show();
  // }
  //
  // else if (age == 35) {
  //   alert("Aren't you a little old to be here?");
  //   $('#drinks').show();
  //
  // else if (age > 18) {
  //   $('#drinks').show();
  //   alert("You are old enough to register to vote.");
  // }
  //
  // }
  // else if (age > 21) {
  //   alert("Have fun!");
  //   $('#drinks').show();
  // }
