
// Show alert when "JOIN US" button is clicked
document.querySelector('.cn a').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Thank you for your interest! Please login to continue.');
});

// Validate login form inputs (email & password)
document.querySelector('.btnn a').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.querySelector('.form input[type="email"]').value;
    const password = document.querySelector('.form input[type="password"]').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in both email and password!');
    } else {
        alert('Login successful (demo only).');
        // You can redirect or perform other actions here
    }
});

// Search input alert (when button is clicked)
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.srch').value;
    if (searchInput.trim() === '') {
        alert('Please type something to search.');
    } else {
        alert('You searched for: ' + searchInput);
    }
});
