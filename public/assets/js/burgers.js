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
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });
});