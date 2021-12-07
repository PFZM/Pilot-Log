const init = async (event) => {
  try {
    event.preventDefault();
    document.body.classList.add("waiting");
    const email = document.getElementById("user_email").value.trim();
    const licenseNumber = document
      .getElementById("license_number")
      .value.trim();

    if (!email || !licenseNumber) {
      alert("Please enter all the details.");
    } else {
      const response = await resetPassword(email, licenseNumber);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const resetPassword = async (email, licenseNumber) => {
  try {
    const response = await fetch("/api/forgot-password/", {
      method: "POST",
      body: JSON.stringify({ email, licenseNumber }),
      headers: { "Content-Type": "application/json" },
    });
    // added lines for debugging
    console.log(response)
    console.log(email)
    console.log(licenseNumber)
    // end of add-in
    if (!response.ok) {
      alert("Email or license is not correct.");
      document.getElementById("user_email").value = "";
      document.getElementById("license_number").value = "";
      return;
    }
    alert("A new password has been sent to your email.");
    document.location.replace("/");
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("submit").addEventListener("click", init);
