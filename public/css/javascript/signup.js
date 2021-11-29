const signup =async(event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const passwordConfirmed = document.getElementById("passwordConfirm").value.trim(); 

    if ((username && password) && (password===passwordConfirmed)) {
        const response = await fetch("/api/volunteer/signup", {
            method: 'post',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }        
    } 
}


document.getElementById("signupLink").addEventListener("submit", signup);