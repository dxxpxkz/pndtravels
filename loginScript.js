document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
  
    // Check if username and password match stored credentials
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      // Redirect to a welcome page or perform other actions upon successful login
      window.location.href = 'welcome.html'; // Replace 'welcome.html' with your welcome page
    } else {
      // Display error message for incorrect credentials
      document.getElementById('loginErrorMsg').textContent = 'Invalid username or password';
    }
  });
  