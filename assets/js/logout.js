document.addEventListener('DOMContentLoaded', function () {

    function logout() {
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    }

    document.getElementById('logoutButton').addEventListener('click', logout);

});