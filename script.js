document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // ফর্ম রিলোড হওয়া বন্ধ করবে

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            form.reset(); // ইনপুট ফিল্ডগুলো খালি করবে
        } else {
            alert("Please fill in all fields.");
        }
    });
});