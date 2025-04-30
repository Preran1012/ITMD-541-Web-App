const API_BASE = "https://api.sunrisesunset.io/json";

document.getElementById("locationSelect").addEventListener("change", function () {
  const coords = this.value;
  if (coords) {
    const [lat, lng] = coords.split(",");
    fetchData(lat, lng);
  }
});

document.getElementById("useLocationBtn").addEventListener("click", function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetchData(latitude, longitude);
    }, () => {
      alert("Unable to retrieve your location.");
    });
  } else {
    alert("Geolocation not supported.");
  }
});

function fetchData(lat, lng) {
  fetch(`${API_BASE}?lat=${lat}&lng=${lng}&date=today`)
    .then(res => res.json())
    .then(dataToday => {
      fetch(`${API_BASE}?lat=${lat}&lng=${lng}&date=tomorrow`)
        .then(res => res.json())
        .then(dataTomorrow => {
          renderData(dataToday.results, dataTomorrow.results);
        });
    })
    .catch(() => {
      document.getElementById("output").innerHTML = `<p>⚠️ Error fetching data.</p>`;
    });
}

function renderData(today, tomorrow) {
  const emojiMap = {
    sunrise: '🌅',
    sunset: '🌇',
    dawn: '🌄',
    dusk: '🌆',
    day_length: '⏳',
    solar_noon: '🌞',
    timezone: '🌍'
  };

  const renderSection = (label, data) => {
    const section = document.createElement('div');
    section.className = 'day-column';
    section.innerHTML = `<h2>${label}</h2>`;
    Object.keys(emojiMap).forEach(key => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<strong>${emojiMap[key]} ${key.replace('_', ' ').toUpperCase()}:</strong> ${data[key]}`;
      section.appendChild(div);
    });
    return section;
  };

  const output = document.getElementById("output");
  output.innerHTML = '';
  output.appendChild(renderSection('Today', today));
  output.appendChild(renderSection('Tomorrow', tomorrow));
}
