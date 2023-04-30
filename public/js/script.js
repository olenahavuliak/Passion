//Map
var map = L.map('map').setView({lon:12.4963655
  , lat: 41.9027835
}, 12);

// add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// show a marker on the map
L.marker({lon: 12.4963655
  , lat: 41.9027835}).bindPopup('Restaurant "Passion"').addTo(map);


  // var booking = [
  //   { date: "2023-05-01", time: "12:00", guests: 4 },
  //   { date: "2023-05-02", time: "18:30", guests: 2 },
  //   { date: "2023-05-03", time: "20:00", guests: 6 },
  //   // Add more reservations here
  // ];
  
  // var button = document.getElementById("sbm-btn")
  // var form = document.querySelector('form');
  // form.addEventListener('submit', (event) => {
  //   var name = document.getElementById('name-reserv').value;
  //   var email = document.getElementById('email-reserv').value;
  //   var phone = document.getElementById('phone-reserv').value;
  //   var date = document.getElementById('date-reserv').value;
  //   var time = document.getElementById('time-reserv').value;
  //   var guests = document.getElementById('guests-reserv').value;
  
  //   var isReserved = booking.some(item => item.date === date && item.time === time);
  
  //   if (isReserved) {
  //     alert(`Немає вільних столиків на ${time} годину ${date}. Змініть дату`);
  //   } else {
  //     booking.push({
  //       name,
  //       email,
  //       phone,
  //       date,
  //       time,
  //       guests
  //     });
  //     alert('Столик заброньовано');
  //   }
  // });
  



