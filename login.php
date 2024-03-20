<?php
// Lakukan koneksi ke database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "bismillah";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Proses login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_email = $_POST['email'];
    $input_password = $_POST['password'];

    // Gunakan prepared statement untuk mencegah SQL Injection
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $input_email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows != 0) {
        $row = $result->fetch_assoc();
        $stored_password = $row['password'];

        // Gunakan password_verify untuk memeriksa kecocokan password
        if (password_verify($input_password, $stored_password)) {
            // Kredensial benar, tampilkan pesan dan lakukan redirect setelah 3 detik
            echo "<script>alert('Login berhasil!');</script>";
            echo "<script>setTimeout(function(){ 
                localStorage.setItem('username', '" . $row['username'] . "');
                window.location.href = 'index.html'; }, 1000);
                </script>";
            exit(); // Pastikan tidak ada output lain sebelum redirect
        } else {
            // Kata sandi salah
            echo "<script>alert('Kombinasi email dan kata sandi salah.');</script>";
            // Redirect ke halaman login lagi setelah pesan alert muncul
            echo "<script>window.location.href = 'login.html';</script>";
        }
    } else {
        // Pengguna tidak ditemukan
        echo "<script>alert('Pengguna tidak ditemukan.');</script>";
        // Redirect ke halaman register lagi setelah pesan alert muncul
        echo "<script>window.location.href = 'login.html';</script>";
    }

    // Tutup statement
    $stmt->close();
}

// Tutup koneksi
$conn->close();
?>