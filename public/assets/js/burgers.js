$(function () {
    $(".createBurger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0,
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".eatburgerbutton").on("click", function (event) {
        event.preventDefault();
        // console.log("clicked!")
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            // console.log("Burger devoured");
            // Reload the page to get the updated burger list.            
            location.reload();
        });
    });

    $('.deleteburgerbutton').on('click', function (event) {
        var id = $(this).data("id");
        console.log("clicked")
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log('deleted burger')
            location.reload()
        });
    });

});