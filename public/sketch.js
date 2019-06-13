console.log('Here There Be Dragons');
let lat, long;
// Obtain current user position in lat and long coords.
if ('geolocation' in navigator) {
  console.log('Geolocation available.');
  navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    document.getElementById('latitude').textContent = lat.toFixed(2);
    document.getElementById('longitude').textContent = long.toFixed(2);
    console.log(position); // Logs all current user position information.
  });
} else {
  console.log('Geolocation NOT available.');
}
const button = document.getElementById('submit');
button.addEventListener('click', async event => {
  const userInput = document.getElementById('userName').value;
  // Create a coordinate data js object.
  const coordData = { lat, long, userInput };
  // Package the js object as a POST.
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(coordData) // body data type must match "Content-Type" header
  };
  // Send the package to my end point.
  const response = await fetch('/api', options);
  const data = await response.json();
  console.log(data);
});
