document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }

    // Email validation (basic)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return;
    }

    // Display success message
    document.getElementById('successMessage').style.display = 'block';
    // document.getElementById('successMessage').innerText = 'Thank you for contacting us!';
    alert("Thank you for contacting us!");
    // Log data to console
    console.log({
        name: name,
        email: email,
        message: message
    });

    // Clear the form fields after submission
    document.getElementById('contactForm').reset();
});
