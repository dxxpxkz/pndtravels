document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get input values
  var username = document.getElementById('signupUsername').value;
  var password = document.getElementById('signupPassword').value;

  // Store username and password in localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Display success message after signing up
  document.getElementById('signupSuccessMsg').textContent = 'Signup successful! Please login.';
});
