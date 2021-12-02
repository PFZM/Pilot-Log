const logout = async () => {
  try {
    const response = await fetch("api/users/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loging out" });
  }
};

document.getElementById("logout").addEventListener("click", logout);
