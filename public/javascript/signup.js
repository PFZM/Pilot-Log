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

  if (
    !first_name ||
    !last_name ||
    !email ||
    !license ||
    !license_number ||
    !instrument_rating ||
    !password ||
    !passwordConfirmed
  ) {
    alert("Please fill all the fields");
    return;
  } else if (password.length < 8) {
    alert("Password must have at least 8 characters");
    return;
  } else if (password !== passwordConfirmed) {
    alert("Passwords needs to match");
    return;
  } else {
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
  }
};

document.getElementById("signUpButton").addEventListener("click", signup);
