const logout = async () => {
  try {
    document.body.classList.add("waiting");
    const response = await fetch("api/users/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Oops something went wrong, try again.");
      return;
    }
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("logout").addEventListener("click", logout);
