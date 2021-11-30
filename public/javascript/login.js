const login = async (event) => {
  event.preventDefault();
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    const reponse = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (reponse.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};



document.getElementById("loginButton").addEventListener("click", login);
