// Ensure the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve form and necessary elements
    var generateResumeButton = document.getElementById("generateResumeButton");
    var resumeOutput = document.getElementById("resumeOutput");
    // Function to generate and display the resume
    function generateResume() {
        // Retrieve values from input fields
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var number = document.getElementById("number").value.trim();
        var address = document.getElementById("address").value.trim();
        var degree = document.getElementById("degree").value.trim();
        var school = document.getElementById("school").value.trim();
        var year = document.getElementById("year").value.trim();
        var skills = document.getElementById("skills").value.trim();
        // Validate all fields are filled
        if (!name || !email || !number || !address || !degree || !school || !year || !skills) {
            alert("Please fill in all fields.");
            return; // Stop execution if validation fails
        }
        // Create a formatted resume using template literals
        var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(number, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>School/University:</strong> ").concat(school, "</p>\n        <p><strong>Year:</strong> ").concat(year, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        // Display the formatted resume
        resumeOutput.innerHTML = resumeHTML;
    }
    // Attach the function to the button click event
    generateResumeButton.addEventListener("click", generateResume);
});
