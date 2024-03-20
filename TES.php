<?php
// Koneksi ke database
$servername = "localhost"; // Ganti dengan nama server Anda
$username = "Username"; // Ganti dengan nama pengguna database Anda
$password = "Password"; // Ganti dengan kata sandi database Anda
$dbname = "bismillah"; // Ubah nama database ke 'bismillah'

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Memproses data dari formulir jika metode POST digunakan
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil nilai dari formulir
    $username = $_POST['Username'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    // Query SQL untuk menyimpan data ke dalam tabel pengguna
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        // Pendaftaran berhasil
        echo "<script>alert('Pendaftaran berhasil!');</script>";
        // Redirect ke halaman login setelah pesan alert muncul
        echo "<script>window.location.href = 'login.html';</script>";
        exit(); // Pastikan tidak ada output lain sebelum redirect
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Menutup koneksi ke database
$conn->close();
?>
