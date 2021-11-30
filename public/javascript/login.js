const login =async(event) => {
    event.preventDefault();
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log(email, password)

    if (username && password) {
        const reponse =  await fetch("/api/users/login", {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "applications.json"}
        });
        if (reponse.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
};

document.getElementById("loginButton").addEventListener("submit", login)