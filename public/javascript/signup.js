const clearPasswordFields = () => {
  document.getElementById("password").value = "";
  document.getElementById("passwordConfirm").value = "";
  return;
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const signup = async (event) => {
  try {
    event.preventDefault();
    document.body.classList.add("waiting");
    const first_name = document.getElementById("user-first-name").value.trim();
    const last_name = document.getElementById("user-last-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const license = document.querySelector(
      'input[name="license"]:checked'
    ).value;
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
      alert("Please fill all the fields.");
      clearPasswordFields();
      return;
    }
    const checkEmail = validateEmail(email);
    if (!checkEmail) {
      alert("Please enter a valid email.");
      clearPasswordFields();
      return;
    }
    if (password.length < 8) {
      alert("Password must have at least 8 characters");
      clearPasswordFields();
      return;
    }
    if (password !== passwordConfirmed) {
      alert("Passwords needs to match");
      clearPasswordFields();
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
        alert("Oops something went wrong, try again.");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("signUpButton").addEventListener("click", signup);
