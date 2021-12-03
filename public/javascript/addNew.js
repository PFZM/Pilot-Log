//save button pressed
document.getElementById("btnSave").addEventListener("click", async (event) => {
    event.preventDefault();
    const newData = {
        aircraft_id : document.getElementById("aircraftIDSelect").value,
        date : document.getElementById("dateFlight").value,
        dual:  document.getElementById("dualCheck").checked,
        instructor_name: document.getElementById("instructorName").value,
        departure_airport: document.getElementById("departureAirport").value, 
        departure_time: document.getElementById("departureTime").value,
        arrival_airport: document.getElementById("arrivalAirport").value,
        arrival_time: document.getElementById("arrivalTime").value,
        approaches: document.getElementById("approaches").value,
        landings: document.getElementById("landings").value,
        comments: document.getElementById("comments").value ,
        total_instrument_time: document.getElementById("instrumentTime").value,
        total_time : 2.5,
    }

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

document.getElementById("btnUpd").addEventListener("click", async (event) => {
    event.preventDefault();
    const newData = {
        post_id : document.getElementById("logData").attributes("data-post_id"),
        aircraft_id : document.getElementById("aircraftIDSelect").value,
        date : document.getElementById("dateFlight").value,
        dual:  document.getElementById("dualCheck").checked,
        instructor_name: document.getElementById("instructorName").value,
        departure_airport: document.getElementById("departureAirport").value, 
        departure_time: document.getElementById("departureTime").value,
        arrival_airport: document.getElementById("arrivalAirport").value,
        arrival_time: document.getElementById("arrivalTime").value,
        approaches: document.getElementById("approaches").value,
        landings: document.getElementById("landings").value,
        comments: document.getElementById("comments").value ,
        total_instrument_time: document.getElementById("instrumentTime").value,
        total_time : 2.5,
    }
    console.log(newData)
    // const response = await fetch('/api/logData/', {
    //     method: "PUT",
    //     body: JSON.stringify(newData),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (response.ok) {
    //     document.location.replace("/");
    //   } else {
    //     alert("Failed to add new post");
    //   }
});