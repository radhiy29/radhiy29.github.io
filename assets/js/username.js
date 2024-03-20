const tampilkanPesanSelamat = () => {
    // Mendapatkan nilai username dari local storage
    const username = localStorage.getItem('username');

    // Memeriksa apakah username telah tersimpan di local storage
    if (username) {
        // Menampilkan pesan selamat datang jika ada pengguna yang login

        const stateContainer = document.querySelector(".username");
        stateContainer.textContent = username;
    } else {
        // Menampilkan pesan bahwa pengguna belum login
        // const notLoggedInMessage = '<div class="">Belum Login</div>';
        // document.write(notLoggedInMessage);
        const stateContainer = document.querySelector(".username");
        stateContainer.textContent = "Not Logged In"
    }
};