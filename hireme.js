document.getElementById("hireme-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value.trim();

    // Construct the email content
    const subject = `Hiring Request from ${name}`;
    const body = `Hello Ayush,\n\nI would like to hire you for the role of ${role}.\n\nHere are my details:\nName: ${name}\nEmail: ${email}\n\nBest regards,\n${name}`;

    // Create a mailto link to open in the user's default email client
    const mailtoLink = `mailto:aykr4438@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client with pre-filled details
    window.location.href = mailtoLink;
});
