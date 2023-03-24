// Get the form element
const form = document.querySelector('form');

// Add an event listener for when the form is submitted
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get the input values from the form
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const address = form.elements['address'].value;
  const phone = form.elements['phone'].value;

  // Validate the input values
  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }
  
  if (email.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    return;
  }

  if (address.trim() === '') {
    alert('Please enter your address.');
    return;
  }

  if (phone.trim() === '') {
    alert('Please enter your phone number.');
    return;
  }

  // Send the data to the server
  const data = {
    name: name,
    email: email,
    password: password,
    address: address,
    phone: phone
  };

  // Send the data using AJAX or fetch
  // You would need to replace the URL with your own server URL
  fetch('https://example.com/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    alert('Registration successful!');
  })
  .catch(error => {
    // Handle any errors
    alert('Registration failed. Please try again later.');
  });
});
