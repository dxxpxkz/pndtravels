document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
  
    // Create a booking object
    var booking = {
      fullName: fullName,
      email: email,
      destination: destination,
      date: date
    };
  
    // Perform further actions like sending booking data to a server or storing it locally
  
    // Display a confirmation message (You can replace this with your desired action)
    alert('Booking successful! Your trip to ' + destination + ' on ' + date + ' has been booked.');
  
    // Clear form fields after booking
    document.getElementById('bookingForm').reset();
  });
  