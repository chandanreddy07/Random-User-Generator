
async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];
  document.getElementById('user-img').src = user.picture.large;
  document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
  document.getElementById('email-text').textContent = user.email;
  document.getElementById('phone-text').textContent = user.phone;
  document.getElementById('location-text').textContent = `${user.location.city}, ${user.location.country}`;
}
document.getElementById('generate-btn').addEventListener('click', fetchRandomUser);
