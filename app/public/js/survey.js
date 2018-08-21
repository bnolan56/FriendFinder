$(document).ready(function () {
  $("#submit").on("click", function () {
      console.log('submit button has been clicked');
      event.preventDefault();
    // form validation
    function validateForm() {
      let isValid = true;

      $('.validate').each(function() {
        if ($(this).val() === '') {
          isValid = false;
        }
      });

      $('.browser-default').each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
      });

      return isValid;
    }
    // if everything is filled
    if (validateForm() == true) {
      //creates a new friend from the values submitted
      let userInput = {
        name: $('#name').val().trim(),
        photoUrl: $('#photo').val().trim(),
        values: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val()
        ]
      };

      $.post('/api/friends/', userInput, (data) => {
        if (data) {
          console.log(data)
        } else (
          console.log('err or whatevs')
        )
      })

      // Show the modal with the best match
      // NOT WORKING: NEEDS TO TRIGGER MODAL THAT SHOWS DATA THAT LOGS IN CONSOLE FOR HERO COMPATIBILITY
      $('#modal1').modal();

      //clears form once submitted
      $('#name').val("");
      $('#photo').val("");
      $('#q1').val("");
      $('#q2').val("");
      $('#q3').val("");
      $('#q4').val("");
      $('#q5').val("");
      $('#q6').val("");
      $('#q7').val("");
      $('#q8').val("");
      $('#q9').val("");
      $('#q10').val("");
    } else {
      alert("Please fill all questions and fields before submitting.")
    }
  });
});
