//save button pressed
document.getElementById("btnSave").addEventListener("click", async (event) => {
  event.preventDefault();
  document.body.classList.add("waiting");
  const newData = {
    aircraft_id: document.getElementById("aircraftIDSelect").value,
    date: document.getElementById("dateFlight").value,
    dual: document.getElementById("dualCheck").checked,
    instructor_name: document.getElementById("instructorName").value,
    departure_airport: document.getElementById("departureAirport").value,
    departure_time: document.getElementById("departureTime").value,
    arrival_airport: document.getElementById("arrivalAirport").value,
    arrival_time: document.getElementById("arrivalTime").value,
    approaches: document.getElementById("approaches").value || 0,
    landings: document.getElementById("landings").value || 1,
    comments: document.getElementById("comments").value,
    total_instrument_time: document.getElementById("instrumentTime").value || 0,
    total_time: 2.5,
  };
  const response = await fetch("/api/logData", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add new post");
  }
});

document.getElementById("btnCnl").addEventListener("click", async (event) => {
  document.location.replace("/");
});

