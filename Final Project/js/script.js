$(document).ready(function() {
    $("#meta-container").load("meta.html", function() {
        $("head").append($("#meta-container").html());
        $("#meta-container").remove();
    });
    $("#header-container").load("header.html");
    $("#footer-container").load("footer.html");

    // Show About Us section
    $(document).on('click', 'a[href="#about-us"]', function(event) {
        event.preventDefault();
        $('.main-content > .content-wrapper').addClass('hidden');
        $('#contact-us').addClass('hidden');
        $('#about-us').removeClass('hidden');
    });

    // Show Contact Us section
    $(document).on('click', 'a[href="#contact-us"]', function(event) {
        event.preventDefault();
        $('.main-content > .content-wrapper').addClass('hidden');
        $('#about-us').addClass('hidden');
        $('#contact-us').removeClass('hidden');
    });

    // When the user icon is clicked
    $(document).on('click', '.user', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        $('#loginModal').show(); // Show the login modal
    });

    // When the close button is clicked
    $(document).on('click', '.close', function() {
        $('#loginModal').hide(); // Hide the login modal
    });

    // When the login button is clicked
    $(document).on('click', '.btn', function(event) {
        event.preventDefault(); // Prevent the default form submission
        $('#loginModal').hide(); // Hide the login modal
        // Add logic here to verify login and show home content if needed
        alert("Welcome to Trendz");
    });

    // Hide the modal if the user clicks outside of it
    $(window).click(function(event) {
        if (event.target.id == 'loginModal') {
            $('#loginModal').hide();
        }
    });
});