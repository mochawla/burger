$(function() {

    $(".change-devoured").on("click", function(event) {
        //event.preventDefault()
        var id = $(this).data("id");
        var newDevoured = $(this).attr("data-burgerdevoured");
        console.log(this);
        console.log(newDevoured)
        var newDevouredState = {
          devoured: newDevoured
        };
        
       // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          //console.log("changed devoured to", newDevoured);
          //console.log(id);
          // Reload the page to get the updated list
          location.reload();
        }
      ); 

    });


    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
         burger_name: $("#burger").val().trim(),
        };


        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );



    });


})
