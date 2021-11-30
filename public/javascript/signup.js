const signup = async (event) => {
  event.preventDefault();
  const first_name = document.getElementById("user-first-name").value.trim();
  const last_name = document.getElementById("user-last-name").value.trim();
  const email = document.getElementById("user-email").value.trim();
  const license = document.querySelector('input[name="license"]:checked').value;
  const license_number = document
    .getElementById("user-license-number")
    .value.trim();
  const instrument_rating = document.querySelector(
    'input[name="instrument"]:checked'
  ).value;
  const password = document.getElementById("password").value.trim();
  const passwordConfirmed = document
    .getElementById("passwordConfirm")
    .value.trim();

  console.log(
    first_name,
    last_name,
    email,
    license,
    license_number,
    instrument_rating,
    password
  );

  if (password === passwordConfirmed) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        license,
        license_number,
        instrument_rating,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Passwords needs to match");
    return;
  }
};

document.getElementById("signUpButton").addEventListener("click", signup);
