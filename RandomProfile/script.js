// Example fetch function (you can replace with your API fetch)
async function fetchRandomUser() {
  // Sample API call
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];

  // Update image
  document.getElementById('user-img').src = user.picture.large;

  // Update name
  document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;

  // Update email inside span only
  document.getElementById('email-text').textContent = user.email;

  // Update phone inside span only
  document.getElementById('phone-text').textContent = user.phone;

  // Update location inside span only
  document.getElementById('location-text').textContent = `${user.location.city}, ${user.location.country}`;
}

// Generate new user on button click
document.getElementById('generate-btn').addEventListener('click', fetchRandomUser);

// Load initial user on page load
fetchRandomUser();
