const logout  =(event) => {
    event.preventDefault();
    fetch('api/users/logout', {
        method: "post",
        headers: {"Content-Type": "application/json"}
    })
   if (Response.ok) {
       document.location.replace("/")
   } else {
        alert(response.statusText);
   };
};

document.getElementById("logout").addEventListener("click",logout);