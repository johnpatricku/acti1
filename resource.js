function logout() {
    let response = confirm("are you sure?");
    if (response) {
        window.location.href = 'index.html'; 
    }
}