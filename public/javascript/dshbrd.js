document.getElementById("logTable").addEventListener("click",  async (event) => {
  event.preventDefault();
  if (event.target.matches("td.delBtn *")) {
    const target = event.target.closest("td.delBtn");
    const log_id = target.getAttribute("data-id")
    //console.log("you deleted me" , log_id, target );
    const response = await fetch(`/api/logData/${log_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete project");
    }
  }else if ((event.target.matches("td.editBtn *"))) {
    const target = event.target.closest("td.editBtn");
    const log_id = target.getAttribute("data-id")
    console.log("you edited me" , log_id, target );
    const response = await fetch(`/logs/${log_id}`, {
      method: "GET",
    });
  
    if (response.ok) {
    } else {
      console.log(response)
      alert("Failed to render logData");
    }




  }
});

